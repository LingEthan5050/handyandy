'use client';
import Link from 'next/link';

const services = [
  {
    title: 'Kitchen & Bath Remodeling',
    description: 'From cabinet installation to full renovations, we modernize your space with high-end finishes and practical design.',
    icon: '🍽️',
  },
  {
    title: 'General Handyman Services',
    description: 'No job is too small. We handle everything from drywall repair to door replacements and more.',
    icon: '🔧',
  },
  {
    title: 'Exterior Repairs & Decks',
    description: 'Wood rot repair, pressure washing, siding, gutters, and custom deck builds.',
    icon: '🏡',
  },
  {
    title: 'Painting & Drywall',
    description: 'Interior and exterior painting, drywall patching, and finishing for a smooth, updated look.',
    icon: '🎨',
  },
  {
    title: 'Flooring Installation',
    description: 'Professional installation of hardwood, vinyl, tile, or laminate to match your style.',
    icon: '🪵',
  },
  {
    title: 'Real Estate Prep & Inspections',
    description: 'Fast, reliable repair work for realtors and homeowners prepping for sale or closing.',
    icon: '📋',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fefaf7] text-[#222] font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 bg-white p-2 rounded shadow-md">
            <img src="/handyandylogo.png" alt="HandyAndy Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-[#c65b37] transition">
                {item}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm">212.666.2888</span>
            <button className="bg-[#c65b37] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#b24e2e] transition">
              GET AN ESTIMATE
            </button>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold text-[#c65b37] mb-6">Our Services</h1>
        <p className="text-gray-700 mb-10 text-lg">
          From small repairs to complete renovations, HandyANDY is your one-stop solution for home improvement in Metro Atlanta.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
