import { getProductsByCategory, getCategoryById } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

interface CategoryParams {
    categoryId: string;
}

interface PageProps {
    params: CategoryParams;
}

export default function KolleksiyaDetayPage({ params }: PageProps) {
    const category = getCategoryById(params.categoryId);
    if (!category) {
        notFound();
    }

    const products = getProductsByCategory(params.categoryId);

    return (
        <main className="min-h-screen bg-[#FFF0DE] py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-serif text-[#703E24] mb-4">{category.name}</h1>
                    <p className="text-[#955735] font-light">{category.description}</p>
                </div>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-[#955735] font-light">
                            Bu kolleksiyada hələ məhsul yoxdur.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
} 