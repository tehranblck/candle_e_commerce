'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/data/products';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCart();

    return (
        <div className="group">
            <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg shadow-sm">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF7F50] to-[#D35400] 
                                  text-white px-3 py-1 rounded-full text-sm font-light">
                        Yeni
                    </div>
                )}
            </div>
            <div className="text-center px-4">
                <h3 className="text-lg font-serif text-[#703E24] mb-2 group-hover:text-[#E67E45] transition-colors">
                    {product.name}
                </h3>
                <p className="text-[#955735] text-sm mb-3 font-light">{product.description}</p>
                <div className="flex flex-col gap-3">
                    <span className="text-xl text-[#703E24] font-light">{product.price}₼</span>
                    <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-[#FFF0DE] border-2 border-[#E67E45] text-[#E67E45] px-4 py-2 
                                 hover:bg-gradient-to-r hover:from-[#FF7F50] hover:to-[#D35400] hover:border-transparent
                                 hover:text-white transition-all duration-300 
                                 font-light tracking-wider rounded-lg shadow-sm hover:shadow-md"
                    >
                        SƏBƏTƏ ƏLAVƏ ET
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard; 