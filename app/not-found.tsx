import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#FDF8F3] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-serif text-[#4A3728] mb-4">404</h1>
                <p className="text-[#6B5750] mb-8 font-light">
                    Axtardığınız səhifə tapılmadı.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-[#8B4513] text-white px-6 py-3 font-light hover:bg-[#6B3410] transition-colors"
                >
                    ANA SƏHİFƏYƏ QAYIT
                </Link>
            </div>
        </main>
    );
} 