// File: CaptureProPage.jsx
import { Button } from "@/components/ui/button";
import { Camera, Video, Mic, Radio, CalendarCheck2 } from "lucide-react";

export default function CaptureProPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-black text-white py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🎥 AOB Production</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-black to-gray-800 text-white px-4">
        <h2 className="text-4xl font-extrabold mb-4">Professional Videography & Livestream Services</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Capture every moment with cinematic precision. Whether it's a live event, commercial shoot, or gear rental — we've got you covered.</p>
        <Button className="text-lg px-8 py-4">Book a Free Consultation</Button>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard icon={<Video />} title="Videography" desc="Capture events, commercials, interviews, and more in cinematic 4K quality." />
          <ServiceCard icon={<Radio />} title="Livestreaming" desc="Multi-angle livestreams for conferences, weddings, and online broadcasts." />
          <ServiceCard icon={<Camera />} title="Equipment Rental" desc="Rent high-end cameras, lenses, lights, and audio gear for your own shoots." />
        </div>
      </section>

      {/* Portfolio */}
<section id="projects" className="py-12 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
    <div className="grid md:grid-cols-3 gap-6">
      
      <div className="bg-gray-100 p-4 rounded shadow">
        <img src="/wedding.jpg" alt="Wedding Livestream" className="rounded mb-4 h-48 w-full object-cover" />
        <h3 className="text-xl font-semibold mb-2">Wedding Livestream</h3>
        <p className="text-gray-700">Captured a live wedding ceremony with multicam setup and drone footage.</p>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <img src="/church-event.jpg" alt="Church Event Broadcast" className="rounded mb-4 h-48 w-full object-cover" />
        <h3 className="text-xl font-semibold mb-2">Church Conference Broadcast</h3>
        <p className="text-gray-700">Handled full audio-visual livestream for a 3-day global conference.</p>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <img src="/music-video.jpg" alt="Music Video" className="rounded mb-4 h-48 w-full object-cover" />
        <h3 className="text-xl font-semibold mb-2">Music Video Production</h3>
        <p className="text-gray-700">Shot and edited a high-energy performance video for an upcoming artist.</p>
      </div>

    </div>
  </div>
</section>
      {/* Call to Action */}
      <section className="py-20 bg-black text-white text-center px-4">
        <h3 className="text-3xl font-bold mb-4">Ready to Capture Your Moment?</h3>
        <p className="text-lg mb-6">Let us bring your vision to life with unmatched quality and professionalism.</p>
        <Button size="lg" className="px-10 py-5 text-xl">Get a Quote</Button>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-6">
          <input type="text" placeholder="Your Name" className="w-full border px-4 py-3 rounded-xl" required />
          <input type="email" placeholder="Email Address" className="w-full border px-4 py-3 rounded-xl" required />
          <textarea placeholder="Tell us about your project..." rows="5" className="w-full border px-4 py-3 rounded-xl" required />
          <Button className="w-full py-4 text-lg">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 AOB Production. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
      <div className="text-blue-600 text-3xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function PortfolioItem({ title }) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
      <div className="bg-gray-300 h-48"></div>
      <div className="p-4">
        <h5 className="font-semibold text-lg">{title}</h5>
      </div>
    </div>
  );
}
