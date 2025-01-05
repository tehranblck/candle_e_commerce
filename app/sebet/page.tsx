'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';

export default function SebetPage() {
    const { items, totalAmount, removeFromCart, updateQuantity } = useCart();

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-[#FFF0DE] py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-serif text-[#703E24] mb-8">Səbətim</h1>
                    <p className="text-[#955735] font-light">Səbətinizdə məhsul yoxdur.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#FFF0DE] py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif text-[#703E24] mb-8 text-center">Səbətim</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Səbət Məhsulları */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map(item => (
                            <div key={item.id} className="bg-white p-4 flex items-center gap-4 rounded-lg shadow-sm">
                                <div className="w-24 h-24 relative rounded-md overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-serif text-[#703E24]">{item.name}</h3>
                                    <p className="text-[#955735] text-sm font-light">{item.price}₼</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="text-[#703E24] hover:text-[#E67E45] transition-colors px-2"
                                        >
                                            -
                                        </button>
                                        <span className="text-[#703E24] min-w-[20px] text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="text-[#703E24] hover:text-[#E67E45] transition-colors px-2"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-600 transition-colors font-light"
                                >
                                    Sil
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Səbət Xülasəsi */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-serif text-[#703E24] mb-4">Sifariş Xülasəsi</h2>
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-[#955735] font-light">
                                <span>Ara Cəm</span>
                                <span>{totalAmount.toFixed(2)}₼</span>
                            </div>
                            <div className="flex justify-between text-[#955735] font-light">
                                <span>Çatdırılma</span>
                                <span>Pulsuz</span>
                            </div>
                        </div>
                        <div className="border-t border-[#703E24]/10 pt-4">
                            <div className="flex justify-between text-[#703E24] font-medium mb-4">
                                <span>Cəmi</span>
                                <span>{totalAmount.toFixed(2)}₼</span>
                            </div>
                            <button className="w-full bg-gradient-to-r from-[#FF7F50] to-[#D35400] text-white 
                                           py-2 rounded-lg hover:from-[#E67E45] hover:to-[#BF4E1F] 
                                           transition-all duration-300 font-light">
                                SİFARİŞİ TAMAMLA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export const metadata = {
    title: 'Səbət | Şam Dünyası',
    description: 'Alış-veriş səbətiniz',
} 