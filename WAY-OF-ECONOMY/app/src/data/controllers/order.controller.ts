import type { OrderItems, OrderStatus, OrdersType } from "../../@types/orders"
import { months } from "../../constants/months";
import { simOrders } from "../mocks/orders";
import type { DataChart } from "../../layout/components/global/InsightsLineChart";
import { Origins } from "../../@types/products";

export type OrderFilter = {
    orderId: string;
    status: OrderStatus;
    sellerName: string
}

export type DataDash = {
    dataGraph: DataChart[],
    topOrders: Pick<OrdersType, "id" | "buyer" | "amount">[],
    topSaledItems: OrderItems[],
    totalSaled: number,
    totalAds: number,
    totalSponsor: number,
    totalWay: number,
    accQtd: number,
    adsQtd: number,
    sponsorQtd: number,
    wayQtd: number,
    totalOrders: number,
    concluded: number,
    cancelled: number
};

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

    public readOrdersDashboard() {
        const orders = this.readOrders();
        const ordersMonth = new Map<string, OrdersType[]>();
        const topItemsSold = new Map<string, OrderItems>();
        const data: DataDash = {
            dataGraph: [],
            topOrders: [],
            topSaledItems: [],
            totalSaled: Number(orders.reduce((acc, current) => acc + current.amount, 0).toFixed(2)),
            totalAds: Number(orders.reduce((acc, current) => acc + current.totalByAds, 0).toFixed(2)),
            totalSponsor: Number(orders.reduce((acc, current) => acc + current.totalBySponsor, 0).toFixed(2)),
            totalWay: Number(orders.reduce((acc, current) => acc + current.totalByStore, 0).toFixed(2)),
            accQtd: 0,
            adsQtd: 0,
            sponsorQtd: 0,
            wayQtd: 0,
            totalOrders: orders.length,
            concluded: 0,
            cancelled: 0
        };

        orders.sort((a, b) => b.amount - a.amount).forEach((order) => {
            const monthInList = ordersMonth.get(order.month);

            if (data.topOrders.length < 5 && order.status !== "cancelled") data.topOrders.push(order);

            if (order.status === "delivered") data.concluded += 1
            if (order.status === "cancelled") data.cancelled += 1

            if (monthInList) monthInList.push(order);
            else ordersMonth.set(order.month, [order]);
        });

        for (const each of months) {
            const monthOrders = ordersMonth.get(each) ?? [];
            const amountMonth = Number(monthOrders.reduce((acc, current) => acc + current.amount, 0).toFixed(2));
            data.dataGraph.push({
                name: each.slice(0, 3),
                value: amountMonth
            })

            for (const order of monthOrders) {
                for (const item of order.items) {
                    const exists = topItemsSold.get(item.id);

                    if (exists) exists.quantity += item.quantity;
                    else topItemsSold.set(item.id, { ...item });
                }
            }
        };

        const quantities = Array.from(topItemsSold.values()).reduce(
            (acc, current) => {
                acc.accQtd += current.quantity;

                switch (current.origin) {
                    case Origins.ADVERTISER:
                        acc.adsQtd += current.quantity;
                        break;

                    case Origins.SPONSORED:
                        acc.sponsorQtd += current.quantity;
                        break;

                    case Origins.STORE:
                        acc.wayQtd += current.quantity;
                        break;
                };
                return acc;
            },
            {
                accQtd: 0,
                adsQtd: 0,
                sponsorQtd: 0,
                wayQtd: 0,
            }
        );

        data.accQtd = quantities.accQtd;
        data.adsQtd = quantities.adsQtd;
        data.sponsorQtd = quantities.sponsorQtd;
        data.wayQtd = quantities.wayQtd;
        data.topSaledItems = Array.from(topItemsSold.values()).sort((a, b) => b.quantity - a.quantity).slice(0, 3);

        return data;
    }
}