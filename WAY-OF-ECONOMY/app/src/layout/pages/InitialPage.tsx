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

    const amountTopItems = (items: Array<OrderItems>, currentValues: Array<OrderItems>) => {
        items.forEach(p => {
            const productIndex = currentValues.findIndex(f => f.id === p.id);
            productIndex >= 0 ?
                Object.assign(
                    currentValues[productIndex],
                    { ...p, quantity: p.quantity + currentValues[productIndex].quantity }
                ) :
                currentValues.push({ ...p })
        })
        return currentValues; 
    }; 

    useEffect(() => {
        const intervalOrders = setInterval(() => {
            const newOrders = simOrders();
            setOrders(newOrders);
        }, 1000 * 60 * 1);
        return () => clearInterval(intervalOrders);
    }, []);

    useEffect(() => {
        setData([])
        setTop([])
        for (const each of months) {
            const soldItemsInMonth = ordersInsight.filter(f => each === f.month).flatMap((m) => [...m.items]);
            const prices = soldItemsInMonth.map((m) => m.price);
            const amountMonth = Number(prices.reduce((acc, current) => acc + current, 0).toFixed(0));
            setData(prev => [...prev, { name: formatMonth(each), value: amountMonth }])

            const accumulateQuantity = amountTopItems(soldItemsInMonth, topItemsSold);
            setTop(accumulateQuantity)
        }
    }, [ordersInsight])

    const topItems = topItemsSold.sort((a, b) => b.quantity - a.quantity).splice(0, 3);

    return (
        <div style={{
            display: "grid",
            rowGap: 20,
            justifyItems: "center",
        }}>
            <div>
                <h1>Produtos mais vendidos</h1>
                <TopProductsCard products={topItems} />
            </div>
            <div>
                <h1>Métricas</h1>
                <LineInsight DataChart={DataChart} Attributes={{ width: '70vw', height: "400px" }} />
            </div>
        </div>
    )
}