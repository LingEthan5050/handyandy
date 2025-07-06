'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'General Inquiry', // NEW FIELD
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          inquiryType: 'General Inquiry',
        });
      } else {
        console.error(data.error);
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-[#fefaf7] text-[#222] font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 bg-white p-2 rounded shadow-md">
            <img src="/handyandylogo.png" alt="HandyAndy Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
                    {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => {
            const route = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <Link key={item} href={route} className="hover:text-[#c65b37] transition">
                {item}
              </Link>
            );
          })}

          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm">212.666.2888</span>
            <button className="bg-[#c65b37] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#b24e2e] transition">
              GET AN ESTIMATE
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold text-[#c65b37] mb-4">
          Need a hand with a project?
        </h1>
        <p className="mb-8 text-gray-700 text-lg">
          Please drop us a line or give us a call. We’re happy to help!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Info & Image */}
          <div className="space-y-4 text-lg">
            <p><strong>Address:</strong> 1225 Johnson Ferry Road, Marietta, GA 30068</p>
            <p><strong>Phone 1:</strong> 770-912-2829</p>
            <p><strong>Phone 2:</strong> 770-912-2829</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:handyandyhome@aol.com" className="text-[#c65b37] underline">
                handyandyhome@aol.com
              </a>
            </p>
            <img
              src="/testing1.jpg"
              alt="Contractor"
              className="rounded shadow-md w-64 h-auto object-cover mt-6"
            />
          </div>

          {/* Right - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded shadow-md text-base">
            {/* Inquiry Type Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">Reason for Inquiry:</label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#c65b37]"
              >
                <option>General Inquiry</option>
                <option>Getting an Estimate</option>
                <option>Update on Current Renovation</option>
                <option>Contractor Inquiry</option>
                <option>Job Application</option>
                <option>Billing Question</option>
              </select>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#c65b37]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#c65b37]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#c65b37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full border px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#c65b37]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#c65b37] hover:bg-[#b24e2e] text-white font-medium px-6 py-2 rounded transition"
            >
              Send now
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
