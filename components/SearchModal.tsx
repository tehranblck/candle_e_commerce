'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const modalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            inputRef.current?.focus();
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm]);

    const handleProductClick = (categoryId: string, productId: number) => {
        onClose();
        router.push(`/kolleksiyalar/${categoryId}#${productId}`);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm">
            <div
                ref={modalRef}
                className="bg-[#FFF0DE] w-full max-w-2xl mx-auto mt-20 rounded-lg shadow-xl"
            >
                <div className="p-4 border-b border-[#E67E45]/20">
                    <div className="flex items-center gap-2">
                        <Search size={20} className="text-[#703E24]" />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Məhsul axtar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none 
                                     text-[#703E24] placeholder-[#955735]"
                        />
                        <button
                            onClick={onClose}
                            className="text-[#703E24] hover:text-[#E67E45] transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                <div className="max-h-96 overflow-y-auto p-4">
                    {filteredProducts.length > 0 ? (
                        <div className="space-y-4">
                            {filteredProducts.map(product => (
                                <button
                                    key={product.id}
                                    onClick={() => handleProductClick(product.categoryId, product.id)}
                                    className="w-full text-left p-2 hover:bg-white/50 rounded-lg 
                                             transition-colors"
                                >
                                    <h3 className="text-[#703E24] font-serif">{product.name}</h3>
                                    <p className="text-[#955735] text-sm font-light">
                                        {product.price}₼
                                    </p>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-[#955735] font-light py-8">
                            Məhsul tapılmadı
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal; 