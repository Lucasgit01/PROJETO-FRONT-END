import type { OrdersType } from "../../@types/orders";

export class OrderInstance {
    private orderModel: Array<OrdersType>;

    constructor(
        private readonly responseOrder: Array<OrdersType>
    ) {
        this.orderModel = [];
    }

    public set() {
        this.orderModel.push(...this.responseOrder);
    }

    public get() {
        return this.orderModel;
    }
}