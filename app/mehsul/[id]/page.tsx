import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products, getCategoryById } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';


export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const product = products.find(p => p.id === parseInt(params.id));

    return {
        title: `${product?.name} | Şam Dünyası`,
        description: product?.description,
        openGraph: {
            title: `${product?.name} | Şam Dünyası`,
            description: product?.description,
            images: [product?.image || '/og-image.jpg'],
        }
    }
}

export default function UrunDetay({ params }: any) {
    const product = products.find(p => p.id === parseInt(params.id));

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#FDF8F3] py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Məhsul Şəkili */}
                    <div className="relative aspect-square">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>

                    {/* Məhsul Məlumatları */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-serif text-[#4A3728] mb-2">{product.name}</h1>
                            <p className="text-[#6B5750] font-light">{product.description}</p>
                        </div>

                        {/* Qiymət və Səbətə Əlavə Et */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-2xl text-[#4A3728] font-light">
                                    {product.price}₺
                                </span>
                                {product.stock !== undefined && (
                                    <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                        {product.stock > 0 ? 'Stokda var' : 'Stokda yoxdur'}
                                    </span>
                                )}
                            </div>
                            <AddToCartButton product={product} />
                        </div>

                        {/* Məhsul Xüsusiyyətləri */}
                        {product.specifications && (
                            <div className="border-t border-[#4A3728]/10 pt-6">
                                <h2 className="text-xl font-serif text-[#4A3728] mb-4">Məhsul Xüsusiyyətləri</h2>
                                <div className="space-y-2 text-[#6B5750] font-light">
                                    {product.specifications.burnTime && (
                                        <div className="flex justify-between">
                                            <span>Yanma Müddəti:</span>
                                            <span>{product.specifications.burnTime}</span>
                                        </div>
                                    )}
                                    {product.specifications.weight && (
                                        <div className="flex justify-between">
                                            <span>Çəki:</span>
                                            <span>{product.specifications.weight}</span>
                                        </div>
                                    )}
                                    {product.specifications.scent && (
                                        <div className="flex justify-between">
                                            <span>Ətir:</span>
                                            <span>{product.specifications.scent}</span>
                                        </div>
                                    )}
                                    {product.specifications.material && (
                                        <div className="flex justify-between">
                                            <span>Material:</span>
                                            <span>{product.specifications.material}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Kateqoriya */}
                        <div className="border-t border-[#4A3728]/10 pt-6">
                            <p className="text-[#6B5750] font-light">
                                Kateqoriya: <span className="text-[#4A3728]">
                                    {getCategoryById(product.categoryId)?.name}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 