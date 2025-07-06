'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <main className="min-h-screen bg-[#fefaf7] text-[#222] font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img src="/handyandylogo.png" alt="Logo" className="h-10 w-auto" />
            <span className="text-lg font-semibold">HandyANDY</span>
          </div>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#c65b37] transition">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm">770.912.2829</span>
            <button className="bg-[#c65b37] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#b24e2e] transition">
              GET AN ESTIMATE
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-2xl">
            ☰
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden px-6 py-4 border-t bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium hover:text-[#c65b37]"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2 text-sm">📞 770.912.2829</div>
            <button className="mt-2 bg-[#c65b37] text-white px-4 py-2 rounded w-full text-sm font-medium">
              GET AN ESTIMATE
            </button>
          </div>
        )}
      </nav>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-[#c65b37] mb-2">About HandyANDY</h1>
        <p className="mb-8 text-gray-700">
          Honest, Reliable, and Value-Priced – Serving Atlanta homes since 1995.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
          <div>
            <h2 className="text-2xl font-medium mb-2">Founded by Andy Luick</h2>
            <p className="text-gray-700">
              HandyANDY was founded in 1995 by Andy Luick, a 4th-generation contractor and real estate investor. 
              With over 29 years of full-time handyman experience, Andy brings a wealth of knowledge and integrity 
              to every job. Our roots run deep in craftsmanship, and our work reflects it.
            </p>
          </div>
          <div className="w-full h-[250px] relative">
            <Image
              src="/founder.jpg"
              alt="Founder"
              fill
              className="rounded shadow-md object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
          <div className="w-full h-[250px] relative">
            <Image
              src="/team.jpg"
              alt="Team"
              fill
              className="rounded shadow-md object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-2">Family-Owned & Operated</h2>
            <p className="text-gray-700">
              We’re more than coworkers – we’re family. Our team has been together for years, 
              with some members staying with us for over 13 years. Each person brings unique skills, 
              pride, and heart to every project. We enjoy what we do – and that shows in our results.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to provide the highest level of home repair and improvement services 
            across metro Atlanta. We use high-quality materials, stand by long-term warranties, 
            and deliver outstanding results – all while keeping pricing fair and transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-medium mb-2">What We Do</h2>
            <p className="text-gray-700 mb-4">
              As homeowners ourselves, we know what it takes. From kitchen and bath remodels 
              to storm and flood restoration, we do it all. We even help with inspection repairs, 
              203k renovation loans, and foreclosure assessments – giving buyers confidence in 
              what they’re investing in.
            </p>
            <p className="text-gray-700">
              Whether it’s an upgrade or an urgent fix, we provide clear, detailed pricing 
              and honest work every time.
            </p>
          </div>
          <div className="w-full h-[250px] relative">
            <Image
              src="/image6.jpg"
              alt="Services"
              fill
              className="rounded shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
