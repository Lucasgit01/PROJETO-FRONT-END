import type { OrderItems } from "../../../@types/orders";
import { Origins } from "../../../@types/products";
import { products } from "../products"

export const getOrdersItems = () => {
    const originsKeys = Object.keys(Origins);
    const randomOrigin = originsKeys[Math.floor(Math.random() * originsKeys.length - 1) + 1];
    const originValue = Origins[randomOrigin as keyof typeof Origins];
    
    const productsByOrigin = products.filter(f => f.origin === originValue);
    const randomItems: Array<OrderItems> = Array.from(
        { length: Math.floor(Math.random() * 5) + 1 },
        () => {
            return {
                ...productsByOrigin[Math.floor(Math.random() * productsByOrigin.length)],
                quantity: (Math.floor(Math.random() * 10) + 1)
            }
        }
    );

    return randomItems;
};