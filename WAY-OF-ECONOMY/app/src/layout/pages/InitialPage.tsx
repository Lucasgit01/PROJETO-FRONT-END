import { useEffect, useState } from "react"
import "../assets/css/initialPage.css";
import { LineInsight } from "../components/global/InsightsLineChart";
import { TopProductsCard } from "../components/TopProductsSold";
import { OrderController, type DataDash } from "../../data/controllers/order.controller";
import { useManagementStore } from "../../hooks/management-store";
import { ArrowLeftRight, BoxesIcon, ClipboardCheck, DollarSign, FileXCorner, Gem } from "lucide-react";
import { convertNumberToBrl } from "../../utils/brlValueLabel";
import { TopOrdersSaled } from "../components/TopOrdersSaled";
import { InsightBarChart } from "../components/global/InsightsBarChart";

export const InitialPage = () => {
    const { store } = useManagementStore();
    const ordersInstance = new OrderController(store);
    const [insights, setInsights] = useState<DataDash>();
    const [adsPercent, setAdsPer] = useState<number>(0);
    const [sponsorPercent, setSponsorPer] = useState<number>(0);
    const [wayPercent, setWayPer] = useState<number>(0);
    const [concludedPercent, setConcludedPer] = useState<number>(0);
    const [cancelledPercent, setCancelledPer] = useState<number>(0);

    const elaborateDashboard = () => {
        const ordersData = ordersInstance.readOrdersDashboard();
        setInsights(ordersData);

        setAdsPer(Math.floor((ordersData.adsQtd / ordersData.accQtd) * 100));
        setSponsorPer(Math.floor((ordersData.sponsorQtd / ordersData.accQtd) * 100));
        setWayPer(Math.floor((ordersData.wayQtd / ordersData.accQtd) * 100));
        setConcludedPer(Math.floor((ordersData.concluded / ordersData.totalOrders) * 100))
        setCancelledPer(Math.floor((ordersData.cancelled / ordersData.totalOrders) * 100))
    };

    useEffect(() => {
        elaborateDashboard();
    }, [store]);

    return (
        <div style={{
            display: "grid",
            rowGap: 40,
            justifyItems: "center",
        }}>
            <div className="cards-container">
                <div className="total-saled-card">
                    <legend>Totais<DollarSign /></legend><hr />
                    <p className="all">
                        <Gem style={{ scale: 0.8 }} />
                        <span>
                            <b>Lucro:</b> {convertNumberToBrl(insights?.totalSaled ?? 0)}
                        </span>
                    </p>
                    <p className="way">
                        <b>Nossa Loja:</b> {convertNumberToBrl(insights?.totalWay ?? 0)}
                    </p>
                    <p className="sponsor">
                        <b>Patrocinadores:</b> {convertNumberToBrl(insights?.totalSponsor ?? 0)}
                    </p>
                    <p className="ads">
                        <b>Anunciantes:</b> {convertNumberToBrl(insights?.totalAds ?? 0)}
                    </p>
                </div>

                <div className="total-products-card">
                    <legend>Produtos Vendidos <BoxesIcon /></legend>
                    <hr />
                    <p className="all"><b>Total:</b> {
                        insights?.accQtd.toLocaleString("pt-br", { style: "decimal" }) ?? 0
                    }</p>
                    <p className="way"><b>Nossa Loja:</b> {wayPercent}%</p>
                    <p className="sponsor"><b>Anúncios:</b> {adsPercent}%</p>
                    <p className="ads"><b>Patrocinadores:</b> {sponsorPercent}%</p>
                </div>

                <div className="order-status-card">
                    <legend>Pedidos - Status <ArrowLeftRight /></legend>
                    <hr />
                    <div className="status-data">
                        <div className="concluded-data">
                            <legend><ClipboardCheck /></legend>
                            <div className="data-text">
                                <span>{insights?.concluded}</span> • <span style={{ color: concludedPercent >= 70 ? "green" : concludedPercent >= 30 ? "yellow" : "red" }}>{concludedPercent}%</span>
                            </div>
                        </div>
                        <div className="cancelled-data">
                            <legend><FileXCorner /></legend>
                            <div className="data-text">
                                <span>{insights?.cancelled}</span> • <span style={{ color: cancelledPercent <= 20 ? "green" : cancelledPercent <= 40 ? "yellow" : "red" }}>{cancelledPercent}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards-container">
                <TopProductsCard products={insights?.topSaledItems ?? []} />
                <TopOrdersSaled topOrders={insights?.topOrders ?? []} />
            </div>
            <div className="cards-container">
                <InsightBarChart
                    DataChart={[
                        { name: "WAY", value: insights?.wayQtd ?? 0 },
                        { name: "PAR", value: insights?.sponsorQtd ?? 0 },
                        { name: "ADS", value: insights?.adsQtd ?? 0 },
                    ]}
                    Attributes={{ width: '20vw', height: "400px" }}
                />
                <LineInsight DataChart={insights?.dataGraph ?? []} Attributes={{ width: '46vw', height: "400px" }} />
            </div>
        </div>
    )
}