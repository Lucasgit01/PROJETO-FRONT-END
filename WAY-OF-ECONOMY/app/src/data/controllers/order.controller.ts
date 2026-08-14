import type { OrderItems, OrderStatus, OrdersType } from "../../@types/orders"
import { months } from "../../constants/months";
import { simOrders } from "../mocks/orders";
import type { DataChart } from "../../layout/components/global/InsightsLineChart";

export type OrderFilter = {
    orderId: string;
    status: OrderStatus;
    sellerName: string
}

export class OrderController {
    constructor(
        public currentStore: string,
        public filters?: Partial<OrderFilter>,
    ) { }

    public readOrders() {
        const generateOrders = simOrders();
        const totalFieldBySession: Record<string, string> = {
            "way": "totalByStore",
            "sponsored": "totalBySponsor",
            "advertiser": "totalByAds"
        };

        const totalField = totalFieldBySession[this.currentStore] as keyof OrdersType;

        if (!totalField) return generateOrders;

        return generateOrders.filter(order => order[totalField] as number > 0);
    };

    private amountTopItems({ items, currentValues }: Record<string, OrderItems[]>) {
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

    public readOrdersDashboard() {
        const orders = this.readOrders();
        const data: {
            dataGraph: DataChart[],
            topSaledItems: OrderItems[],
            concluded: number,
            cancelled: number
        } = {
            dataGraph: [],
            topSaledItems: [],
            concluded: orders.filter(f => f.status === "Entregue").length, 
            cancelled: orders.filter(f => f.status === "Cancelado").length
        };

        for (const each of months) {
            const soldItemsInMonth = orders.filter(f => each === f.month).flatMap((m) => [...m.items]);
            const prices = soldItemsInMonth.map((m) => m.price);

            const amountMonth = Number(prices.reduce((acc, current) => acc + current, 0).toFixed(0));
            data.dataGraph.push({ name: each.slice(0, 3), value: amountMonth })

            const accumulateQuantity = this.amountTopItems({ items: soldItemsInMonth, currentValues: data.topSaledItems });
            data.topSaledItems = accumulateQuantity;
        };

        data.topSaledItems = data.topSaledItems.sort((a, b) => b.quantity - a.quantity).slice(0, 3);

        return data;
    }
}