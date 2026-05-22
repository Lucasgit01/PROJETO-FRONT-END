import { useEffect, useState } from "react"
import { simOrders } from "../data/mocks"
import type { OrdersType } from "../@types/orders"
import { LineInsight, type DataChart } from "./InsightsPage";
import type { ChartData } from "recharts/types/state/chartDataSlice";

export const InitialPage = () => {
    const newOrders = simOrders();
    const [ordersInsight, setOrders] = useState<Array<OrdersType>>(newOrders);
    const [DataChart, setData] = useState<ChartData<DataChart>>([]);

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
        }, 1000 * 60 * 1);
        return () => clearInterval(intervalOrders);
    }, []);

    useEffect(() => {
        const dataChart: Array<DataChart> = [];
        for (const each of months) {
            const filterMonthsOrders = ordersInsight.filter(f => f.month === each);
            const prices: Array<number> = [];
            filterMonthsOrders.forEach((f) => f.items.forEach(f => prices.push(f.price)))
            const amountMonth = Math.floor(prices.reduce((acc, current) => acc + current, 0));
            dataChart.push({ name: formatMonth(each), value: amountMonth })
            setData(dataChart);
        }
    }, [ordersInsight])

    return (
        <div style={{ alignItems: "center", justifyItems: "center" }}>
            <h1>Métricas</h1><br />
            <LineInsight DataChart={DataChart} Attributes={{ width: '60vw', height: 300 }}/>
        </div>
    )
}