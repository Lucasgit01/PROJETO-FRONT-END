import { useEffect, useState } from "react"
import { simOrders } from "../data/mocks"
import type { OrdersType } from "../@types/orders"
import { LineInsight, type DataChart } from "./InsightsPage";
import type { ChartData } from "recharts/types/state/chartDataSlice";

export const InitialPage = () => {
    const newOrders = simOrders();
    const [ordersInsight, setOrders] = useState<Array<OrdersType>>(newOrders);
    const [DataChart, setData] = useState<ChartData<DataChart>>();

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

    useEffect(() => {
        const intervalOrders = setInterval(() => {
            const newOrders = simOrders();
            setOrders([...ordersInsight, ...newOrders]);
        }, 1000 * 60 * 30);
        return () => clearInterval(intervalOrders);
    }, []);

    useEffect(() => {
        for (const each of months) {
            const filterMonthsOrders = ordersInsight.filter(f => f.month === each);
            console.log(ordersInsight)
            const prices: Array<number> = [];
            filterMonthsOrders.forEach((f) => f.items.forEach(f => prices.push(f.price)))
            const amountMonth = prices.reduce((acc, current) => acc + current, 0);
            setData([...DataChart ?? [], { name: each, value: amountMonth }]);
        }
    }, [ordersInsight])

    console.log(DataChart)

    return (
        <div>
            <h1>Métricas</h1><br />
            <LineInsight DataChart={DataChart!} />
        </div>
    )
}