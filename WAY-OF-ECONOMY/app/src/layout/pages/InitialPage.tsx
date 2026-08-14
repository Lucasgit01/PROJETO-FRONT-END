import { useEffect, useState } from "react"
import type { OrderItems } from "../../@types/orders"
import type { ChartData } from "recharts/types/state/chartDataSlice";
import { LineInsight, type DataChart } from "../components/global/InsightsLineChart";
import { TopProductsCard } from "../components/TopProductsSold";
import "../assets/css/initialPage.css";
import { OrderController } from "../../data/controllers/order.controller";
import { useManagementStore } from "../components/global/management-store";

export const InitialPage = () => {
    const { store } = useManagementStore();
    const ordersInstance = new OrderController(store);

    const [DataChart, setData] = useState<ChartData<DataChart>>([]);
    const [topItemsSold, setTop] = useState<OrderItems[]>([])

    const elaborateDashboard = () => {
        const newOrders = ordersInstance.readOrdersDashboard();
        setData(newOrders.dataGraph)
        setTop(newOrders.topSaledItems);
    };

    useEffect(() => {
        elaborateDashboard();
    }, [store]);

    return (
        <div style={{
            display: "grid",
            rowGap: 20,
            justifyItems: "center",
        }}>
            <div className="cards-container">
                <div>

                </div>
            </div>
            <div>
                <h1>Produtos mais vendidos</h1>
                <TopProductsCard products={topItemsSold} />
            </div>
            <div>
                <h1>Métricas</h1>
                <LineInsight DataChart={DataChart} Attributes={{ width: '55vw', height: "400px" }} />
            </div>
        </div>
    )
}