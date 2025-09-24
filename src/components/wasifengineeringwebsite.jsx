import React from 'react';
import { motion } from 'framer-motion';

export default function WasifEngineeringWebsite() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* NAVBAR */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">WE</div>
            <div>
              <h1 className="font-semibold text-lg">Wasif Engineering</h1>
              <p className="text-xs text-gray-500">Waterproofing • Road Works • Machinery • Construction</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#quote" className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow">Request Quote</a>
          </nav>

          <div className="md:hidden">
            <button className="px-3 py-2 border rounded">Menu</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[url('/placeholder-hero.jpg')] bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Wasif Engineering</h2>
            <p className="mt-4 text-gray-700">Professional waterproofing, road works, heavy machinery services and full-scale construction contracting. Reliable teams — on time, on budget.</p>

            <div className="mt-6 flex gap-4">
              <a href="#quote" className="bg-indigo-600 text-white px-5 py-3 rounded-lg shadow">Get a Free Quote</a>
              <a href="#projects" className="border px-5 py-3 rounded-lg">View Projects</a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/60 p-3 rounded">Licensed Professionals</div>
              <div className="bg-white/60 p-3 rounded">24/7 Site Support</div>
              <div className="bg-white/60 p-3 rounded">Warranty & QA</div>
              <div className="bg-white/60 p-3 rounded">Certified Equipment</div>
            </div>
          </motion.div>

         <motion.div
  initial={{ x: 30, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  className="w-full md:w-1/2"
>
  <div className="grid grid-cols-2 gap-3">
    <div className="h-40 rounded-lg overflow-hidden">
      <img
        src="/office pics.png"
        alt="Office Work"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="h-40 rounded-lg overflow-hidden">
      <img
        src="/road work.png"
        alt="Road Work"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="h-40 rounded-lg overflow-hidden">
      <img
        src="/waterproofing.png"
        alt="Waterproofing"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="h-40 rounded-lg overflow-hidden">
      <img
        src="/sitepic.png"
        alt="Waterproofing"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold">Our Services</h3>
        <p className="text-gray-600 mt-2">Full-range services for industrial, commercial, and residential clients.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-6 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">Waterproofing</h4>
            <p className="text-sm text-gray-600 mt-2">Basements, roofs, terraces, expansion joints, structural sealing, membrane application, injection grouting and long-term warranties.</p>
            <ul className="mt-3 text-sm list-disc ml-5 text-gray-700">
              <li>Liquid-applied membranes</li>
              <li>Bentonite & bituminous solutions</li>
              <li>Leak detection & repair</li>
            </ul>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">Road Works & Paving</h4>
            <p className="text-sm text-gray-600 mt-2">Full road construction, patching, resurfacing, asphalt and concrete pavement works, compaction, drainage and line marking.</p>
            <ul className="mt-3 text-sm list-disc ml-5 text-gray-700">
              <li>Highway & local roads</li>
              <li>Subgrade stabilization</li>
              <li>Drainage & culverts</li>
            </ul>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">Heavy Machinery & Equipment</h4>
            <p className="text-sm text-gray-600 mt-2">Supply, rental and operation of excavators, pavers, rollers, mixers, cranes, pumps and specialized waterproofing rigs.</p>
            <ul className="mt-3 text-sm list-disc ml-5 text-gray-700">
              <li>Operator + fuel + maintenance packages</li>
              <li>On-site logistics & safety</li>
            </ul>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm md:col-span-2">
            <h4 className="font-semibold">Construction & Turnkey Projects</h4>
            <p className="text-sm text-gray-600 mt-2">Structural construction, foundations, finishing, contractor management and turnkey delivery for small-to-large scale projects.</p>
            <ul className="mt-3 text-sm list-disc ml-5 text-gray-700">
              <li>Project management & scheduling</li>
              <li>Quality assurance & safety compliance</li>
            </ul>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">Consultation & Testing</h4>
            <p className="text-sm text-gray-600 mt-2">Site surveys, material testing, waterproofing inspections, and engineering consultation for troubleshooting and planning.</p>
          </article>
        </div>
      </section>

     {/* PROJECTS */}
<section id="projects" className="bg-white/60 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-2xl font-semibold">Selected Projects</h3>
    <p className="text-gray-600 mt-2">
      Recent work highlights — click to enlarge or to see case studies.
    </p>

    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="rounded overflow-hidden shadow-sm">
        <div className="h-48 overflow-hidden">
          <img
            src="/waterproofing.png"
            alt="Industrial Warehouse Waterproofing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h5 className="font-semibold">Industrial Warehouse Waterproofing</h5>
          <p className="text-sm text-gray-600 mt-1">
            Complete membrane replacement with 10-year warranty.
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-sm">
        <div className="h-48 overflow-hidden">
          <img
            src="/road work.png"
            alt="Municipal Road Rehabilitation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h5 className="font-semibold">Municipal Road Rehabilitation</h5>
          <p className="text-sm text-gray-600 mt-1">
            6 km of asphalt overlay, drainage upgrades.
          </p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-sm">
        <div className="h-48 overflow-hidden">
          <img
            src="/roller.jpg"
            alt="Heavy Equipment Supply"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h5 className="font-semibold">Heavy Equipment Supply</h5>
          <p className="text-sm text-gray-600 mt-1">
            Short- and long-term rentals with certified operators.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* OUR CLIENTS */}
<section id="clients" className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-2xl font-semibold">Our Clients</h3>
    <p className="text-gray-600 mt-2">Trusted by leading companies and organizations.</p>

    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/abbaseen.jpg" alt="Abbaseen" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/aghasteel.jpg" alt="Agha Steel" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/ahcl.png" alt="AHCL" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/artistic.png" alt="Artistic" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/artisticmilliners.jpg" alt="Artistic Milliners" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/asenterprise.jpg" alt="AS Enterprise" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/cityschool.png" alt="City School" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/ffbl.png" alt="FFBL" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/fwo.jpg" alt="FWO" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/izhargroup.png" alt="Izhar Group" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/paragon.jpg" alt="Paragon" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/rajby.jpg" alt="Rajby" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/soorty.png" alt="Soorty" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/unity foods.png" alt="Unity Foods" className="max-h-16 object-contain" />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <img src="/zehratextile.jpg" alt="Zehra Textile" className="max-h-16 object-contain" />
      </div>
    </div>
  </div>
</section>



   {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">About Wasif Engineering</h3>
            <p className="text-gray-600 mt-3">We provide our diligent services in Construction works; mainly in Road Works, Water proofing, Renovation works, Interior Decoration and supplying heavy machinery.
          We have good knowledge and practical work experience in Textile Industries, Educational sectors, Navy housing scheme and Residential sectors. 
          Founded in the year 2000. The commitment of our company is to provide quality works in affordable cost and in time. 
        </p>

            <ul className="mt-4 text-sm list-inside list-disc text-gray-700">
              <li>Licensed & insured</li>
              <li>Material & workmanship warranties</li>
              <li>Safety-first approach</li>
              <li>Competitive pricing and detailed quotes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Why Clients Choose Us</h4>
            <ol className="mt-3 list-decimal ml-5 text-sm text-gray-700">
              <li>Experienced project managers with site supervision</li>
              <li>Modern machinery and certified operators</li>
              <li>On-time delivery and clear reporting</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CONTACT / QUOTE FORM */}
      <section id="contact" className="bg-indigo-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="mt-2 text-indigo-100">Request a site visit, quote or consultation. Provide project details below and our team will respond promptly.</p>

            <div className="mt-6 text-sm">
              <p>📞 Phone: <strong>+92-3232791142_ +92-11-2724549</strong></p>
              <p>✉️ Email: <strong>wasifengeineering@gmail.com</strong></p>
              <p>📍 Office: <strong>Office # 3, RC 5/104, Hassan Ali Hoti Building, Rati Line, Gazdarabad,  Ranchoreline, Karachi
      </strong></p>
            </div>
          </div>

          <form id="quote" className="bg-white text-gray-800 p-6 rounded-lg shadow">
            <div className="grid gap-3">
              <input name="name" placeholder="Your name" className="p-3 border rounded" />
              <input name="company" placeholder="Company (optional)" className="p-3 border rounded" />
              <input name="phone" placeholder="Phone" className="p-3 border rounded" />
              <input name="email" placeholder="Email" className="p-3 border rounded" />
              <select name="service" className="p-3 border rounded">
                <option>Service required (select)</option>
                <option>Waterproofing</option>
                <option>Road Works</option>
                <option>Machinery Rental</option>
                <option>Construction / Turnkey</option>
                <option>Consultation & Testing</option>
              </select>
              <textarea name="details" placeholder="Project details / site address" className="p-3 border rounded h-24"></textarea>
              <button type="submit" className="bg-indigo-700 text-white px-4 py-3 rounded">Send Request</button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-white">Wasif Engineering</h4>
            <p className="text-sm mt-2">Professional contractors for waterproofing, road works, heavy machinery and construction.</p>
          </div>

          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-2 text-sm">
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Follow Us</h5>
            <p className="text-sm mt-2">LinkedIn / Facebook / Instagram (add links)</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Wasif Engineering — All rights reserved.</div>
      </footer>
    </div>
  );
}

