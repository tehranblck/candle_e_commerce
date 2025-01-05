export default function KampaniyalarPage() {
    return (
        <main className="min-h-screen bg-[#FFF0DE] py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif text-[#703E24] mb-8 text-center">Kampaniyalar</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Kampaniya Kartı 1 */}
                    <div className="bg-white p-6 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                        <h2 className="text-2xl font-serif text-[#703E24] mb-4">Yaz Endirimi</h2>
                        <p className="text-[#955735] mb-4 font-light">
                            Bütün yaz kolleksiyasında 20% endirim fürsəti!
                        </p>
                        <button className="bg-gradient-to-r from-[#FF7F50] to-[#D35400] text-white 
                                       px-6 py-2 rounded-lg hover:from-[#E67E45] hover:to-[#BF4E1F] 
                                       transition-all duration-300 font-light">
                            KƏŞF ET
                        </button>
                    </div>

                    {/* Kampaniya Kartı 2 */}
                    <div className="bg-white p-6 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                        <h2 className="text-2xl font-serif text-[#703E24] mb-4">2 Al 1 Ödə</h2>
                        <p className="text-[#955735] mb-4 font-light">
                            Seçilmiş məhsullarda keçərli kampaniya
                        </p>
                        <button className="bg-gradient-to-r from-[#FF7F50] to-[#D35400] text-white 
                                       px-6 py-2 rounded-lg hover:from-[#E67E45] hover:to-[#BF4E1F] 
                                       transition-all duration-300 font-light">
                            KƏŞF ET
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export const metadata = {
    title: 'Kampaniyalar | Şam Dünyası',
    description: 'Şam Dünyası xüsusi kampaniyalar və endirimlər',
} 