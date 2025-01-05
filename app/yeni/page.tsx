import { getNewProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function YeniMehsullarPage() {
    const newProducts = getNewProducts();

    return (
        <main className="min-h-screen bg-[#FFF0DE] py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif text-[#703E24] mb-8 text-center">Yeni Məhsullar</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
} 