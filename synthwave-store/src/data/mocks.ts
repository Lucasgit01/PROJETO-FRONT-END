export const simOrders = () => Array.from({ length: 100 }, (_, index) => {
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

    const products = [
        {
            product: "PlayStation 5",
            price: 4299.9,
            image:
                "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
        },
        {
            product: "Xbox Series X",
            price: 3899.9,
            image:
                "https://media.istockphoto.com/id/1560833158/pt/foto/game-controller-with-purple-lit-keyboard-amidst-various-wireless-devices.jpg?s=612x612&w=0&k=20&c=D66EjrqcUA9GVknxt-gNSPDC6PWcP8x3A661Z6xC-0o="
        },
        {
            product: "Nintendo Switch OLED",
            price: 2299.9,
            image:
                "https://media.istockphoto.com/id/1560833158/pt/foto/game-controller-with-purple-lit-keyboard-amidst-various-wireless-devices.jpg?s=612x612&w=0&k=20&c=D66EjrqcUA9GVknxt-gNSPDC6PWcP8x3A661Z6xC-0o=",
        },
        {
            product: "Smart TV LG OLED 65",
            price: 7999.99,
            image:
                "https://www.lg.com/br/images/tvs/md07522877/gallery/DZ-01.jpg",
        },
        {
            product: "Smart TV Samsung 55 4K",
            price: 3199.0,
            image:
                "https://images.samsung.com/is/image/samsung/p6pim/br/qn55q60cagxzd/gallery/br-qled-q60c-qn55q60cagxzd-537408336",
        },
        {
            product: "God of War Ragnarök",
            price: 249.9,
            image:
                "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg",
        },
        {
            product: "The Legend of Zelda: Tears of the Kingdom",
            price: 357.9,
            image:
                "https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg",
        },
        {
            product: "EA Sports FC 26",
            price: 349.9,
            image:
                "https://upload.wikimedia.org/wikipedia/en/5/5c/EA_Sports_FC_24_cover.jpg",
        },
        {
            product: "Controle Xbox Wireless",
            price: 459.9,
            image:
                "https://assets.xboxservices.com/assets/04/94/04947d2e-4b7b-4f53-95b5-7b3b0cb1b61d.jpg",
        },
        {
            product: "Headset Gamer HyperX",
            price: 599.9,
            image:
                "https://row.hyperx.com/cdn/shop/products/hyperx_cloud_ii_red_1_main.jpg",
        },
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

    const randomMonth = Math.floor(13 + Math.random() * 13 - 1 * 13);

    const randomItems = Array.from(
        { length: Math.floor(Math.random() * 3) + 1 },
        () => products[Math.floor(Math.random() * products.length)]
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
});