import type { OrdersType } from "../../@types/orders";
import { products } from "./products";

export const simOrders = () => Array.from({ length: 200 }, (_, index) => {
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

    const sellers = [
        "Game Store Brasil",
        "Tech Vision",
        "Mega Games",
        "Ultra HD Store",
        "Games Planet",
        "Digital Center",
        "Console House",
        "Power Games",
    ];

    const cities = [
        { city: "São Paulo", state: "SP" },
        { city: "Rio de Janeiro", state: "RJ" },
        { city: "Curitiba", state: "PR" },
        { city: "Belo Horizonte", state: "MG" },
        { city: "Florianópolis", state: "SC" },
        { city: "Porto Alegre", state: "RS" },
        { city: "Salvador", state: "BA" },
        { city: "Fortaleza", state: "CE" },
    ];

    const payments = [
        { method: "PIX", installments: 1 },
        { method: "Cartão de Crédito", installments: 6 },
        { method: "Cartão de Crédito", installments: 10 },
        { method: "Cartão de Crédito", installments: 12 },
        { method: "Débito", installments: 1 },
        { method: "Boleto Bancário", installments: 1 },
    ];

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

    const currentMonth = new Date().getMonth();
    const randomMonth = Math.floor(currentMonth + Math.random() * currentMonth - 1 * currentMonth);

    const randomItems = Array.from(
        { length: Math.floor(Math.random() * 3) + 1 },
        () => Object.assign({ ...products[Math.floor(Math.random() * products.length)], quantity: (Math.floor(Math.random() * 10) + 1) })
    );


    const randomCity =
        cities[Math.floor(Math.random() * cities.length)];

    return {
        buyer: buyers[Math.floor(Math.random() * buyers.length)],
        sellerName:
            sellers[Math.floor(Math.random() * sellers.length)],
        month: months[randomMonth],
        items: randomItems,
        address: `Rua ${index + 1} de Março`,
        number: Math.floor(Math.random() * 999) + 1,
        city: randomCity.city,
        state: randomCity.state,
        payment:
            payments[Math.floor(Math.random() * payments.length)],
    };
}) as Array<OrdersType>;