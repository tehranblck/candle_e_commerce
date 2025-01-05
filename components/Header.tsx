'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import SearchModal from './SearchModal';

const Header = () => {
    const { totalItems } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll olduğunda header'ı sabit yap
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobil menü açıkken scroll'u engelle
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const menuItems = [
        { href: '/kolleksiyalar', label: 'Kolleksiyalar' },
        { href: '/yeni', label: 'Yeni' },
        { href: '/kampaniyalar', label: 'Kampaniyalar' },
        { href: '/haqqimizda', label: 'Haqqımızda' },
        { href: '/elaqe', label: 'Əlaqə' },
    ];

    return (
        <>
            <header
                className={`bg-[#FFF0DE] sticky top-0 z-40 transition-shadow duration-300
                          ${isScrolled ? 'shadow-md' : 'border-b border-[#E67E45]/20'}`}
            >
                {/* Üst Banner */}
                <div className="bg-gradient-to-r from-[#FF7F50] to-[#D35400] text-white py-2">
                    <div className="container mx-auto px-4">
                        <p className="text-center text-sm font-light">
                            Bütün sifarişlərdə pulsuz çatdırılma
                        </p>
                    </div>
                </div>

                {/* Ana Header */}
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Mobil Menü Butonu */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-[#703E24] hover:text-[#E67E45] transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Logo */}
                        <Link href="/" className="font-serif text-2xl text-[#703E24] hover:text-[#E67E45] transition-colors">
                            Şam Dünyası
                        </Link>

                        {/* Desktop Menü */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-[#955735] hover:text-[#E67E45] transition-colors font-light"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Sağ İkonlar */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="text-[#703E24] hover:text-[#E67E45] transition-colors"
                            >
                                <Search size={20} />
                            </button>
                            <Link
                                href="/sebet"
                                className="text-[#703E24] hover:text-[#E67E45] transition-colors relative"
                            >
                                <ShoppingBag size={20} />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#FF7F50] text-white 
                                                   text-xs w-5 h-5 rounded-full flex items-center 
                                                   justify-center font-light">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobil Menü */}
                <div
                    className={`fixed inset-0 bg-[#FFF0DE] z-50 lg:hidden transition-transform duration-300 
                              ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-8">
                            <Link
                                href="/"
                                className="font-serif text-2xl text-[#703E24]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Şam Dünyası
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-[#703E24]"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="space-y-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block text-lg text-[#703E24] hover:text-[#E67E45] 
                                             transition-colors font-light"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </>
    );
};

export default Header; 