import { useEffect, useState } from "react"
import { simOrders } from "../../data/mocks/orders"
import type { OrderItems, OrdersType } from "../../@types/orders"
import { LineInsight, type DataChart } from "../components/global/InsightsLineChart";
import type { ChartData } from "recharts/types/state/chartDataSlice";
import { TopProductsCard } from "../components/TopProductsSold";

export const InitialPage = () => {
    const newOrders = simOrders();
    const [ordersInsight, setOrders] = useState<Array<OrdersType>>(newOrders);
    const [DataChart, setData] = useState<ChartData<DataChart>>([]);
    const [topItemsSold, setTop] = useState<Array<OrderItems>>([])

    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const formatMonth = (value: string) => {
        return value.charAt(0) + value.charAt(1) + value.charAt(2);
    }

    useEffect(() => {
        const intervalOrders = setInterval(() => {
            const newOrders = simOrders();
            setOrders(newOrders);
        }, 1000 * 60 * 10);
        return () => clearInterval(intervalOrders);
    }, []);

    useEffect(() => {
        const dataChart: Array<DataChart> = [];
        const soldItems: Array<OrderItems> = [];
        for (const each of months) {
            const soldItemsInMonth = ordersInsight.filter(f => each === f.month).flatMap((m) => [...m.items]);
            soldItems.push(...soldItemsInMonth)
            const prices = soldItemsInMonth.map((m) => m.price);
            const amountMonth = Math.floor(prices.reduce((acc, current) => acc + current, 0));
            dataChart.push({ name: formatMonth(each), value: amountMonth })
        }
        setTop(soldItems.sort((a, b) => b.quantity - a.quantity).splice(0, 3))
        setData(dataChart);
    }, [ordersInsight])

    return (
            <div style={{ display: "grid", rowGap: 10, justifyItems: "center" }}>
                <div>
                    <h1>Produtos mais vendidos</h1>
                    <TopProductsCard products={topItemsSold} />
                </div>
                <div>
                    <h1>Métricas</h1><br />
                    <LineInsight DataChart={DataChart} Attributes={{ width: '60vw', height: 300 }} />
                </div>
            </div>
    )
}