export default function HaqqimizdaPage() {
    return (
        <main className="min-h-screen bg-[#FFF0DE] py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-serif text-[#703E24] mb-8 text-center">Haqqımızda</h1>

                <div className="prose prose-lg mx-auto">
                    <p className="text-[#955735] mb-6 font-light leading-relaxed">
                        2015-ci ildə kiçik bir emalatxanada başlayan səyahətimiz, bu gün Azərbaycanın hər yerindəki evlərə çatan bir markaya çevrildi. Hər bir şamın əl işi olduğu emalatxanamızda, təbii materiallar və ənənəvi üsullarla istehsal edirik.
                    </p>

                    <p className="text-[#955735] mb-6 font-light leading-relaxed">
                        İstifadə etdiyimiz bütün materiallar təbii və ətraf mühitə zərərsizdir. Soya şamı əsaslı məhsullarımızda ən keyfiyyətli ətirlər istifadə edir və hər bir şamı diqqətlə hazırlayırıq.
                    </p>

                    <h2 className="text-2xl font-serif text-[#703E24] mt-12 mb-6">Dəyərlərimiz</h2>
                    <ul className="text-[#955735] space-y-4 font-light">
                        <li>Təbii materiallardan istifadə</li>
                        <li>Əl işi istehsal</li>
                        <li>Davamlı qablaşdırma</li>
                        <li>Müştəri məmnuniyyəti</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export const metadata = {
    title: 'Haqqımızda | Şam Dünyası',
    description: 'Şam Dünyası - əl işi şamların hazırlanması və satışı',
} 