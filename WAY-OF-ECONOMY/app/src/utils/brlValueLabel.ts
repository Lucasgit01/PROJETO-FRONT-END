export const convertNumberToBrl = (value: number): string => {
    if (typeof value != "number") return "R$ - ";

    const brlLabel = value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 2
    });

    return brlLabel;
};