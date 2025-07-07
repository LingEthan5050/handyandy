'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <main className="min-h-screen bg-[#fefaf7] text-[#222] font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-left gap-2 bg-white p-2 rounded shadow-md">
            <img src="/handyandylogo.png" alt="HandyAndy Logo" className="h-25 w-auto" />
          </div>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#c65b37] transition">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm">212.666.2888</span>
            <button className="bg-[#c65b37] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#b24e2e] transition">
              GET AN ESTIMATE
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-2xl">☰</button>
        </div>

        {mobileOpen && (
          <div className="md:hidden px-6 py-4 border-t bg-white">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block py-2 text-sm font-medium hover:text-[#c65b37]">
                {link.name}
              </Link>
            ))}
            <div className="mt-2 text-sm">📞 212.666.2888</div>
            <button className="mt-2 bg-[#c65b37] text-white px-4 py-2 rounded w-full text-sm font-medium">
              GET AN ESTIMATE
            </button>
          </div>
        )}
      </nav>

      {/* Hero Slideshow */}
      <section className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          className="h-[300px] md:h-[500px]"
        >
          {[
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
            'testing1.jpg',
            'testing3.jpg',
          ].map((url, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={`${url}?auto=format&fit=crop&w=1400&q=80`}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center md:flex-row md:justify-between gap-12">
        {[0, 1, 2].map((_, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className={`w-[260px] h-[260px] overflow-hidden shadow-lg rounded-[20%] ${i === 1 ? '' : 'rotate-[-3deg]'}`}
          >
            {i === 1 ? (
              <div className="text-center max-w-xl md:text-center p-4">
                <h1 className="text-4xl font-light leading-snug mb-4">
                  Your one-stop shop for <br /> kitchen remodelling
                </h1>
                <p className="text-gray-600 text-base mb-6">
                  We take care of your entire kitchen renovation in New York, managing the entire process
                  & guaranteeing stunning results, every time.
                </p>
                <button className="bg-[#c65b37] text-white px-6 py-3 rounded font-medium text-sm hover:bg-[#b24e2e] transition">
                  GET AN ESTIMATE
                </button>
              </div>
            ) : (
              <img
                src={
                  i === 0
                    ? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
                    : 'https://images.unsplash.com/photo-1588854337118-1c4d5b46fba6?auto=format&fit=crop&w=800&q=80'
                }
                alt="Kitchen"
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        ))}
      </section>

      {/* Tagline Section */}
      <motion.section
        className="bg-[#fefaf7] py-16 border-t"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-800">
            Our team handles everything, from initial design to the final finishes for your kitchen.
          </h2>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="bg-white py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-10">
            Our customers are raving about us
          </h2>
          <div className="flex flex-col gap-6 max-w-xl mx-auto">
            {[
              {
                name: 'Sarah J.',
                quote: 'Absolutely loved our kitchen after the remodel. Team was professional and fast!',
              },
              {
                name: 'Marcus R.',
                quote: 'Super smooth experience. Very responsive and on time.',
              },
              {
                name: 'Jane/Steve',
                quote: 'We’d 100% recommend them. Our kitchen is now the best room in the house.',
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                className="border rounded-lg p-6 shadow-sm text-left bg-white"
                variants={fadeUp}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-600 mb-2">{review.quote}</p>
                <p className="text-xs font-medium text-gray-800">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience + Video */}
      <motion.section
        className="bg-[#f1ece7] py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-light mb-4 leading-snug">
              MyHome has over 20 years experience <br />
              designing and renovating kitchens in NYC
            </h2>
            <p className="text-gray-700">
              We’ve been featured in design shows and trusted by thousands of NYC homeowners.
            </p>
          </div>

          <div className="md:w-1/2 w-full aspect-video">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/4E33hwDIkkA"
              title="Video testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
