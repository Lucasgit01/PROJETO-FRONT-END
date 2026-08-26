import type { ProductBody } from "./products";

export type OrderStatus = "waiting payment" | "paid" | "separating" | "send" | "delivered" | "cancelled";

export interface OrderItems extends ProductBody {
    quantity: number
}

export interface OrdersType {
    id: string;
    buyer: string;
    sellersName: Array<string>;
    month: string;
    items: Array<OrderItems>;
    address: string;
    number: number;
    city: string;
    state: string;
    payment: {
        method: string;
        installments: number;
    };
    status: OrderStatus
    totalByAds: number;
    totalBySponsor: number;
    totalByStore: number;
    amount: number
};