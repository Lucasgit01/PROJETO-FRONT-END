import type { ProductBody } from "./products";

export type OrderStatus = "à pagar" | "pago" | "separando" | "Enviado" | "Entregue" | "Cancelado";

export interface OrderItems extends ProductBody {
    quantity: number
}

export interface OrdersType {
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