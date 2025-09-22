import React, { useState } from "react";
import { motion } from "framer-motion";

export default function WasifEngineeringWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* NAVBAR */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
              WE
            </div>
            <div>
              <h1 className="font-semibold text-lg">Wasif Engineering</h1>
              <p className="text-xs text-gray-500">
                Waterproofing • Roads • Machinery • Construction
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-indigo-600 transition">
              Services
            </a>
            <a href="#projects" className="hover:text-indigo-600 transition">
              Projects
            </a>
            <a href="#about" className="hover:text-indigo-600 transition">
              About
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
            <a
              href="#quote"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Request Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-3 py-2 border rounded"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
            <a href="#services" className="block hover:text-indigo-600">
              Services
            </a>
            <a href="#projects" className="block hover:text-indigo-600">
              Projects
            </a>
            <a href="#about" className="block hover:text-indigo-600">
              About
            </a>
            <a href="#contact" className="block hover:text-indigo-600">
              Contact
            </a>
            <a
              href="#quote"
              className="block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
            >
              Request Quote
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative bg-[url('/placeholder-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-10 text-white">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Engineering with Excellence
            </h2>
            <p className="mt-4 text-gray-200">
              Delivering professional waterproofing, road works, heavy machinery
              services and full-scale construction contracting — with
              reliability and trust.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#quote"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg shadow transition"
              >
                Get a Free Quote
              </a>
              <a
                href="#projects"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-5 py-3 rounded-lg transition"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-full md:w-1/2"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="h-40 bg-white/20 rounded-lg flex items-center justify-center">
                Project
              </div>
              <div className="h-40 bg-white/20 rounded-lg flex items-center justify-center">
                Machinery
              </div>
              <div className="h-40 bg-white/20 rounded-lg flex items-center justify-center">
                Road Work
              </div>
              <div className="h-40 bg-white/20 rounded-lg flex items-center justify-center">
                Waterproofing
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center">Our Services</h3>
        <p className="text-gray-600 mt-3 text-center">
          Full-range solutions for industrial, commercial, and residential
          clients.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Waterproofing",
              desc: "Roofs, basements, terraces, expansion joints, and long-term warranties.",
            },
            {
              title: "Road Works & Paving",
              desc: "Highway construction, resurfacing, asphalt, drainage and more.",
            },
            {
              title: "Heavy Machinery",
              desc: "Excavators, pavers, rollers, cranes with operators and safety.",
            },
            {
              title: "Construction",
              desc: "Turnkey projects with project management and quality assurance.",
            },
            {
              title: "Consultation & Testing",
              desc: "Site surveys, material testing and waterproofing inspections.",
            },
          ].map((s, i) => (
            <article
              key={i}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg">{s.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold">Get in Touch</h3>
            <p className="mt-3 text-indigo-100">
              Need a project consultation, quote, or site visit? Fill the form
              and our team will reach you shortly.
            </p>

            <div className="mt-6 text-sm">
              <p>📞 +92-323-2791142</p>
              <p>✉️ info@wasifengineering.com</p>
              <p>📍 Karachi, Sindh — Pakistan</p>
            </div>
          </div>

          <form className="bg-white text-gray-800 p-6 rounded-lg shadow space-y-4">
            <input placeholder="Your Name" className="p-3 border rounded w-full" />
            <input placeholder="Email" className="p-3 border rounded w-full" />
            <input placeholder="Phone" className="p-3 border rounded w-full" />
            <select className="p-3 border rounded w-full">
              <option>Select a Service</option>
              <option>Waterproofing</option>
              <option>Road Works</option>
              <option>Machinery Rental</option>
              <option>Construction</option>
            </select>
            <textarea
              placeholder="Project details"
              className="p-3 border rounded w-full h-24"
            ></textarea>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg w-full transition">
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-white">Wasif Engineering</h4>
            <p className="text-sm mt-2">
              Trusted contractors for waterproofing, road works, machinery, and
              construction.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white">Quick Links</h5>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white">Follow Us</h5>
            <p className="text-sm mt-3">LinkedIn / Facebook / Instagram</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Wasif Engineering — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
