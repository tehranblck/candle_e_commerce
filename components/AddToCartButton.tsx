'use client';

import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/data/products';

export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className={`w-full py-3 px-6 rounded-none font-light tracking-wider transition-colors
                ${product.stock === 0
                    ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                    : 'bg-[#8B4513] text-white hover:bg-[#6B3410]'
                }`}
        >
            {product.stock === 0 ? 'STOKDA YOXDUR' : 'SƏBƏTƏ ƏLAVƏ ET'}
        </button>
    );
} 