import type { OrderStatus, OrdersType } from "../../@types/orders";
import { Origins } from "../../@types/products";
import { cities } from "../../constants/cities";
import { months } from "../../constants/months";
import { getOrdersItems } from "./helpers/ordersProductOrigin";
import { stores } from "./stores";

const buyers = [
    "Carlos Eduardo",
    "Fernanda Lima",
    "Ricardo Souza",
    "Juliana Martins",
    "André Oliveira",
    "Patrícia Gomes",
    "Lucas Almeida",
    "Camila Rocha",
    "Bruno Ferreira",
    "Amanda Costa",
];

const payments = [
    { method: "PIX", installments: 1 },
    { method: "Cartão de Crédito", installments: 6 },
    { method: "Cartão de Crédito", installments: 10 },
    { method: "Cartão de Crédito", installments: 12 },
    { method: "Débito", installments: 1 },
    { method: "Boleto Bancário", installments: 1 },
];

const status: OrderStatus[] = ["waiting payment", "paid", "separating", "send", "delivered", "cancelled"];

//Simular pedidos
export const simOrders = (): OrdersType[] => Array.from({ length: 10000 }, (_, index) => {
    const products = getOrdersItems();
    const sellers: string[] = [];

    products.forEach(f => {
        const store = stores.find(s => s.id === f.ownerId)?.name ?? Origins.STORE;
        if (!sellers.includes(store)) sellers.push(store);
    });

    const orderBuyer = buyers[Math.floor(Math.random() * buyers.length)];
    const currentMonth = new Date().getMonth() + 1;
    const randomMonth = Math.floor(Math.random() * currentMonth);
    const randomLocale = cities[Math.floor(Math.random() * cities.length)];
    const randomStatus = status[Math.floor(Math.random() * status.length - 1 ) + 1];
    const orderPayment = payments[Math.floor(Math.random() * payments.length)]

    const totalByAds = Number(
        products.filter(f => f.origin === Origins.ADVERTISER)
            .reduce((acc, current) => acc + current.price * current.quantity, 0).toFixed(2)
    );

    const totalBySponsor = Number(
        products.filter(f => f.origin === Origins.SPONSORED)
        .reduce((acc, current) => acc + current.price * current.quantity, 0).toFixed(2)
    );

    const totalByStore = Number(
        products.filter(f => f.origin === Origins.STORE)
        .reduce((acc, current) => acc + current.price * current.quantity, 0).toFixed(2)
    )

    const amount = Number((totalByStore + totalBySponsor + totalByAds).toFixed(2));

    return {
        ...randomLocale,
        id: index.toString(),
        buyer: orderBuyer,
        sellersName: sellers,
        month: months[randomMonth],
        items: products,
        address: `Rua ${index + 1} de Março`,
        number: Math.floor(Math.random() * 999) + 1,
        payment: orderPayment,
        status: randomStatus,
        totalByAds,
        totalBySponsor,
        totalByStore,
        amount
    };
});