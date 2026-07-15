export enum Origins {
    STORE = "Nossa Loja",
    SPONSORED = "Produto patrocinado",
    ADVERTISER = "Anunciante",
};

interface Dimensions {
    width: string;
    height: string;
    thickness: string;
};

export interface ProductBody {
    id: string;
    ownerId?: string;
    categoryId: string;
    subCategoryId: string
    label: string;
    origin: Origins;
    images: Array<string>;
    price: number;
    stock: number;
    dimensions?: Dimensions
    attributes: Array<string>;
    compatibilities?: Array<string>;
    details?: Array<string>;
    freightCondition?: string;
    reviewsCount: number;
};