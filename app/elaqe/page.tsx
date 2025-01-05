export default function ElaqePage() {
    return (
        <main className="min-h-screen bg-[#FFF0DE] py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-serif text-[#703E24] mb-8 text-center">Əlaqə</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Əlaqə Məlumatları */}
                    <div>
                        <h2 className="text-2xl font-serif text-[#703E24] mb-6">Bizimlə Əlaqə</h2>
                        <div className="space-y-4 text-[#955735] font-light">
                            <p>
                                <strong className="font-medium">Ünvan:</strong><br />
                                Nərimanov rayonu, 28 May küçəsi 5<br />
                                Bakı, Azərbaycan
                            </p>
                            <p>
                                <strong className="font-medium">Telefon:</strong><br />
                                +994 (12) 555 55 55
                            </p>
                            <p>
                                <strong className="font-medium">E-poçt:</strong><br />
                                info@samdünyasi.az
                            </p>
                        </div>
                    </div>

                    {/* Əlaqə Formu */}
                    <div>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-[#703E24] mb-2 font-light" htmlFor="name">
                                    Ad Soyad
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 border border-[#703E24]/20 focus:border-[#FF7F50] 
                                             outline-none bg-white rounded-lg transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-[#703E24] mb-2 font-light" htmlFor="email">
                                    E-poçt
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 border border-[#703E24]/20 focus:border-[#FF7F50] 
                                             outline-none bg-white rounded-lg transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-[#703E24] mb-2 font-light" htmlFor="message">
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full p-2 border border-[#703E24]/20 focus:border-[#FF7F50] 
                                             outline-none bg-white rounded-lg transition-colors"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#FF7F50] to-[#D35400] text-white 
                                         py-3 rounded-lg hover:from-[#E67E45] hover:to-[#BF4E1F] 
                                         transition-all duration-300 font-light"
                            >
                                GÖNDƏR
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
} 