import type { OrderItems } from "../../../@types/orders";
import { Origins } from "../../../@types/products";
import { products } from "../products"

export const getRandomProduct = () => {
    const originsKeys = Object.keys(Origins);
    const randomOriginKey = Math.floor(Math.random() * originsKeys.length - 1) + 1;
    const randomOrigin = originsKeys[randomOriginKey];
    const originValue = Origins[randomOrigin as keyof typeof Origins];

    return products.filter(f => f.origin === originValue);
}

export const getOrdersItems = () => {
    const randomItems: Array<OrderItems> = Array.from(
        { length: Math.floor(Math.random() * 5) + 1 }, () => {
            const productsByOrigin = getRandomProduct();
            
            return {
                ...productsByOrigin[Math.floor(Math.random() * productsByOrigin.length)],
                quantity: (Math.floor(Math.random() * 10) + 1)
            }
        }
    );

    return randomItems;
};