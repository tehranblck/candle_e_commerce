'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products, getBestSellers, categories } from '@/data/products';
import Link from "next/link";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/data/hero-slides';

const bestSellers = getBestSellers();

const testimonials = [
  {
    id: 1,
    text: "Şamların qoxusu və keyfiyyəti möhtəşəmdir. Xüsusilə lavanda qoxulu şam mənim favoritimdir!",
    author: "Aysel Məmmədova",
    role: "Müntəzəm Müştəri",
    image: "/testimonials/avatar1.jpg"
  },
  {
    id: 2,
    text: "Hədiyyə qutusunda aldığım şamlar dostlarım tərəfindən çox bəyənildi. Qablaşdırma da mükəmməldir.",
    author: "Nigar Əliyeva",
    role: "Dizayner",
    image: "/testimonials/avatar2.jpg"
  },
  {
    id: 3,
    text: "Təbii materiallardan hazırlanması və uzun müddət yanması məni çox məmnun etdi.",
    author: "Cavid Hüseynov",
    role: "İnteryer Dizayneri",
    image: "/testimonials/avatar3.jpg"
  }
];

// FAQ verisi
const faqs = [
  {
    id: 1,
    question: "Şamların tərkibi nədən ibarətdir?",
    answer: "Şamlarımız 100% təbii soya mumu və yüksək keyfiyyətli efir yağlarından hazırlanır. Heç bir süni və ya zərərli maddə istifadə edilmir."
  },
  {
    id: 2,
    question: "Şamların yanma müddəti nə qədərdir?",
    answer: "Şamlarımızın yanma müddəti ölçüsündən asılı olaraq 30-50 saat arasında dəyişir. Hər məhsulun dəqiq yanma müddəti məhsul təsvirində göstərilmişdir."
  },
  {
    id: 3,
    question: "Sifarişlər nə qədər müddətə çatdırılır?",
    answer: "Sifarişlər Bakı daxilində 1-2 iş günü, regionlara isə 2-4 iş günü ərzində çatdırılır. Bütün sifarişlər xüsusi qablaşdırma ilə göndərilir."
  },
  {
    id: 4,
    question: "Geri qaytarma şərtləri necədir?",
    answer: "İstifadə edilməmiş məhsulları 14 gün ərzində geri qaytara bilərsiniz. Geri qaytarma üçün məhsulun orijinal qablaşdırmasında olması vacibdir."
  },
  {
    id: 5,
    question: "Topdan satış mümkündürmü?",
    answer: "Bəli, topdan satış üçün minimum 20 ədəd sifariş qəbul edirik. Ətraflı məlumat üçün bizimlə əlaqə saxlaya bilərsiniz."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <main className="min-h-screen bg-[#FFF0DE]">
      {/* Hero Slider */}
      <section className="relative h-[80vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 
                      ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Slide Background */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Slide Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-serif mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg mb-8 font-light">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.buttonLink}
                    className="inline-block bg-gradient-to-r from-[#FF7F50] to-[#D35400] text-white 
                             px-10 py-4 rounded-lg hover:from-[#E67E45] hover:to-[#BF4E1F] 
                             transition-all duration-300 font-light tracking-wider 
                             shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 
                   text-white p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 
                   text-white p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all
                        ${index === currentSlide
                  ? 'bg-white w-4'
                  : 'bg-white/50 hover:bg-white/75'}`}
            />
          ))}
        </div>
      </section>

      {/* Öne Çıkan Ürünler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-[#4A3728] mb-8 text-center">Seçilmiş Məhsullar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-[#FFF0DE] to-[#FFE4CC]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-[#703E24] mb-12 text-center">
            Müştərilərimiz Nə Deyir?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow
                                 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <span className="text-4xl text-[#FF7F50]">"</span>
                </div>

                {/* Testimonial Content */}
                <div className="pt-4">
                  <p className="text-[#955735] font-light leading-relaxed mb-6">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-[#703E24]">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm text-[#955735] font-light">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#FF7F50]">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Özellikler Section */}
      <section className="bg-[#cea483] text-[#FDF8F3] py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-3xl mb-4">✧</div>
              <h3 className="font-serif mb-3">Təbii Materiallar</h3>
              <p className="text-[#FDF8F3]/80 font-light">
                100% soya şamı və təbii esanslar
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">✧</div>
              <h3 className="font-serif mb-3">Əl İşi</h3>
              <p className="text-[#FDF8F3]/80 font-light">
                Hər biri xüsusi hazırlanmış dizaynlar
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">✧</div>
              <h3 className="font-serif mb-3">Təhlükəsiz Çatdırılma</h3>
              <p className="text-[#FDF8F3]/80 font-light">
                Xüsusi qablaşdırma ilə təhlükəsiz göndəriş
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kategoriler */}


      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-[#FFE4CC] to-[#FFF0DE]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif text-[#703E24] mb-12 text-center">
            Tez-tez Verilən Suallar
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="font-serif text-[#703E24]">
                    {faq.question}
                  </span>
                  <span className={`text-[#FF7F50] transition-transform duration-300 
                                    ${openFaq === faq.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 
                            ${openFaq === faq.id ? 'max-h-40 py-4' : 'max-h-0'}`}
                >
                  <p className="text-[#955735] font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-[#955735] font-light mb-4">
              Başqa sualınız var?
            </p>
            <Link
              href="/elaqe"
              className="inline-block bg-gradient-to-r from-[#FF7F50] to-[#D35400] 
                                   text-white px-8 py-3 rounded-lg hover:from-[#E67E45] 
                                   hover:to-[#BF4E1F] transition-all duration-300 font-light"
            >
              BİZİMLƏ ƏLAQƏ SAXLAYIN
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A3728] text-[#FDF8F3]/90 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo və Açıqlama */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl mb-4">Şam Dünyası</h3>
              <p className="font-light text-sm leading-relaxed mb-4 text-[#FDF8F3]/70">
                Əl işi, təbii materiallarla hazırlanan xüsusi dizayn şamlarımızla yaşam məkanlarınıza
                istilik və rahatlıq qatırıq.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-[#FDF8F3]/70 hover:text-[#FDF8F3] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-[#FDF8F3]/70 hover:text-[#FDF8F3] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h4 className="font-serif text-lg mb-4">Məlumat</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/haqqimizda" className="text-[#FDF8F3]/70 hover:text-[#FDF8F3] transition-colors text-sm font-light">
                    Haqqımızda
                  </Link>
                </li>
                <li>
                  <Link href="/catdirilma" className="text-[#FDF8F3]/70 hover:text-[#FDF8F3] transition-colors text-sm font-light">
                    Çatdırılma
                  </Link>
                </li>
                <li>
                  <Link href="/qaytarma" className="text-[#FDF8F3]/70 hover:text-[#FDF8F3] transition-colors text-sm font-light">
                    Qaytarma Şərtləri
                  </Link>
                </li>
              </ul>
            </div>

            {/* İletişim */}
            <div>
              <h4 className="font-serif text-lg mb-4">Əlaqə</h4>
              <ul className="space-y-2">
                <li className="text-[#FDF8F3]/70 text-sm font-light">
                  info@samdünyasi.az
                </li>
                <li className="text-[#FDF8F3]/70 text-sm font-light">
                  +994 50 123 45 67
                </li>
                <li className="text-[#FDF8F3]/70 text-sm font-light">
                  Bakı, Azərbaycan
                </li>
              </ul>
            </div>
          </div>

          {/* Alt Footer */}
          <div className="border-t border-[#FDF8F3]/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm font-light text-[#FDF8F3]/70">
                © 2024 Şam Dünyası. Bütün hüquqlar qorunur.
              </p>
              <div className="flex gap-6 text-sm font-light text-[#FDF8F3]/70">
                <Link href="/mexfilik" className="hover:text-[#FDF8F3] transition-colors">
                  Məxfilik Siyasəti
                </Link>
                <Link href="/istifade" className="hover:text-[#FDF8F3] transition-colors">
                  İstifadə Şərtləri
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
