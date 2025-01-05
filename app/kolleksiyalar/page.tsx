import { getAllCategories } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function KolleksiyalarPage() {
    const categories = getAllCategories();

    return (
        <main className="min-h-screen bg-[#FFF0DE] py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif text-[#703E24] mb-8 text-center">Kolleksiyalar</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/kolleksiyalar/${category.id}`}
                            className="group relative h-80 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#703E24]/20 to-[#703E24]/60 
                                          group-hover:from-[#703E24]/30 group-hover:to-[#703E24]/70 
                                          transition-all duration-300 z-10" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                <h2 className="text-2xl font-serif text-white z-20 mb-2 transform group-hover:scale-105 transition-transform">
                                    {category.name}
                                </h2>
                                <p className="text-white/90 text-sm font-light z-20 max-w-xs">
                                    {category.description}
                                </p>
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm 
                                                   rounded-lg text-white text-sm font-light">
                                        KƏŞF ET
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
} 