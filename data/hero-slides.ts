export interface HeroSlide {
    id: number;
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}

export const heroSlides: HeroSlide[] = [
    {
        id: 1,
        title: "Əl İşi Təbii Şamlar",
        description: "Evinizə rahatlıq və istilik qatacaq, 100% təbii materiallarla hazırlanan xüsusi dizayn şamlar",
        image: "/candle.jpg",
        buttonText: "İNDİ ALIŞ-VERİŞ ET",
        buttonLink: "/kolleksiyalar"
    },
    {
        id: 2,
        title: "Yeni Mövsüm Kolleksiyası",
        description: "Payız ətrini evinizə gətirən xüsusi hazırlanmış şam kolleksiyamızla tanış olun",
        image: "/candle2.jpg",

        buttonText: "KOLLEKSİYANI KƏŞF ET",
        buttonLink: "/kolleksiyalar/movsumi-kolleksiya"
    },
    {
        id: 3,
        title: "Hədiyyəlik Dəstlər",
        description: "Sevdikləriniz üçün xüsusi hazırlanmış hədiyyə dəstlərimizi kəşf edin",
        image: "/candle3.jpg",

        buttonText: "HƏDIYYƏ SEÇ",
        buttonLink: "/kolleksiyalar/hediyye-desti"
    }
]; 