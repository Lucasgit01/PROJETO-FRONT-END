export const access = {
    director: [
        "sales",
        "service",
        "partners_read",
        "ads_read",
        "products_control",
        "cash_control",
        "user_control",
    ],
    manager: [
        "sales",
        "service",
        "partners_control",
        "ads_control",
        "products_control",
        "cash_read",
        "user_control",
    ],
    "performance manager": [
        "sales",
        "partners_read",
        "products_read",
    ],
    finance: [
        "sales_read",
        "partners_read",
        "ads_read",
        "cash_control"
    ],
    "inventory analyst": [
        "sales_read",
        "products_control"
    ]
};