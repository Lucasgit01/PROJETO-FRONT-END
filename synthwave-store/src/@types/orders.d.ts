export interface OrderItems {
     product: string;
        price: number;
        image: string;
}

export interface OrdersType {
    buyer: string;
    sellerName: string;
    month: string;
    items: Array<OrderItems>;
    address: string;
    number: number;
    city: string;
    state: string;
    payment: {
        method: string;
        installments: number;
    }
};