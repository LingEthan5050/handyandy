'use client';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Modern Kitchen Remodel',
    description: 'Transformed a dated kitchen into a modern, open-concept space with custom cabinets and lighting.',
    image: '/kitchen1.jpg',
    tags: ['Kitchen'],
  },
  {
    title: 'Bathroom Redesign',
    description: 'Upgraded bathroom with walk-in shower, new tile, and improved plumbing.',
    image: '/bathroom1.jpg',
    tags: ['Bathroom'],
  },
  {
    title: 'Basement Renovation',
    description: 'Converted unfinished basement into a livable space with vinyl flooring and recessed lighting.',
    image: '/basement1.jpg',
    tags: ['Basement'],
  },
  {
    title: 'Custom Deck Build',
    description: 'Designed and built a pressure-treated wooden deck with railing and stairs.',
    image: '/deck1.jpg',
    tags: ['Outdoor'],
  },
];

export default function PortfolioPage() {
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

      {/* Portfolio Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold text-[#c65b37] mb-4">Our Work</h1>
        <p className="text-lg text-gray-700 mb-10">
          Here’s a look at some of the renovation and repair projects we’ve completed across metro Atlanta.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
              <div className="w-full h-52 relative">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{proj.description}</p>
                <div className="flex gap-2 flex-wrap text-xs text-[#c65b37] font-medium">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="bg-[#fef0ea] px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
