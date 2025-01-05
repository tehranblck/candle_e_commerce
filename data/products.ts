export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId: string;
    isNew: boolean;
    isBestSeller: boolean;
    stock?: number;
    specifications?: {
        burnTime?: string;
        weight?: string;
        scent?: string;
        material?: string;
    };
}

export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
}

export const categories: Category[] = [
    {
        id: 'klassik',
        name: 'Klassik Şamlar',
        description: 'Ənənəvi üslubda hazırlanmış əl işi şamlar',
        image: '/candle3.jpg'

    },
    {
        id: 'etirli',
        name: 'Ətirli Şamlar',
        description: 'Təbii efir yağları ilə hazırlanmış ətirli şamlar',
        image: '/candle2.jpg'

    },
    {
        id: 'dekorativ',
        name: 'Dekorativ Şamlar',
        description: 'Xüsusi dizaynlı bəzək şamları',
        image: '/candle.jpg'

    },
    {
        id: 'hediyye-desti',
        name: 'Hədiyyə Dəstləri',
        description: 'Xüsusi hazırlanmış hədiyyə şam dəstləri',
        image: '/candle2.jpg'
    },
    {
        id: 'movsumi',
        name: 'Mövsümi Kolleksiya',
        description: 'Mövsümə xüsusi hazırlanmış şamlar',
        image: '/candle3.jpg'

    }
];

export const products: Product[] = [
    {
        id: 1,
        name: 'Lavanda Ətirli Şam',
        description: 'Təbii lavanda yağı ilə hazırlanmış sakitləşdirici şam',
        price: 35,
        image: '/candle.jpg',

        categoryId: 'etirli',
        isNew: true,
        isBestSeller: true
    },
    {
        id: 2,
        name: 'Qızıl Dekorlu Şam',
        description: 'Əl işi qızıl dekorlu klassik şam',
        price: 45,
        image: '/candle2.jpg',

        categoryId: 'dekorativ',
        isNew: false,
        isBestSeller: true
    },
    {
        id: 3,
        name: 'Vanilli Şam Dəsti',
        description: '3 ədəd vanilli ətirli şamdan ibarət dəst',
        price: 89,
        image: '/candle3.jpg',

        categoryId: 'hediyye-desti',
        isNew: true,
        isBestSeller: false
    },
    {
        id: 4,
        name: 'Payız Kolleksiyası Şamı',
        description: 'Darçın və alma ətirli mövsümi şam',
        price: 42,
        image: '/candle2.jpg',

        categoryId: 'movsumi',
        isNew: true,
        isBestSeller: true
    },
    {
        id: 5,
        name: 'Ağ Silindr Şam',
        description: 'Sadə və zərif dizaynlı klassik şam',
        price: 28,
        image: '/candle.jpg',

        categoryId: 'klassik',
        isNew: false,
        isBestSeller: true
    },
    {
        id: 6,
        name: 'Jasmin Ətirli Şam',
        description: 'Təbii jasmin yağı ilə hazırlanmış ətirli şam',
        price: 38,
        image: '/candle3.jpg',

        categoryId: 'etirli',
        isNew: true,
        isBestSeller: false
    }
];

export function getNewProducts(): Product[] {
    return products.filter(product => product.isNew);
}

export function getBestSellers(): Product[] {
    return products.filter(product => product.isBestSeller);
}

export function getProductsByCategory(categoryId: string): Product[] {
    return products.filter(product => product.categoryId === categoryId);
}

export function getCategoryById(categoryId: string): Category | undefined {
    return categories.find(category => category.id === categoryId);
}

export function getAllCategories(): Category[] {
    return categories;
} 