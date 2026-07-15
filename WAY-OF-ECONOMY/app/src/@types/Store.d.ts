export interface Stores {
    id: string;
    name: string;
    status: "active" | "inactive" | "analysis" | "paused";
    ownerCode: string;
    document: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
};