'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Video, Mic2 as Mic, Drone, Scissors, CalendarClock, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const brand = {
  name: "KJ VISUALS STUDIOS",
  tagline: "Capturing Creativity with Precision",
  logo: null,
};

const services = [
  { title: "Photography", icon: Camera, blurb: "Portraits • Real Estate • Products • Events" },
  { title: "Videography", icon: Video, blurb: "Cinematic ads • Music videos • Documentaries" },
  { title: "Podcasts", icon: Mic, blurb: "Studio recording • Editing • Distribution" },
  { title: "Drone Services", icon: Drone, blurb: "Aerial photos & 4K footage • Mapping" },
  { title: "Event Coverage", icon: CalendarClock, blurb: "Weddings • Baby showers • Corporate" },
  { title: "Editing", icon: Scissors, blurb: "Color grading • Sound • Social cut‑downs" },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200", caption: "Wedding Moments" },
  { src: "https://images.unsplash.com/photo-1520975922284-9e0ce942b53d?w=1200", caption: "Real Estate" },
  { src: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1200", caption: "Product Detail" },
  { src: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=1200", caption: "Podcast Session" },
  { src: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1200", caption: "Aerial View" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200", caption: "Corporate Event" },
];

const contact = {
  email: "kjvisualstudios@gmail.com",
  phone: "+254706632682",
  location: "Kikuyu Town, Kenya",
  socials: [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/" },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-24 text-center bg-black">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-amber-600 bg-clip-text text-transparent">
          {brand.name}
        </h1>
        <p className="mt-4 text-lg text-white/80">{brand.tagline}</p>
      </section>

      {/* About */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-3xl font-bold text-amber-700 mb-4">About Us</h2>
        <p className="max-w-3xl leading-7 text-lg">
          Led by Creative Director <span className="font-semibold">Joseph Kaguu</span>, KJ Visuals Studios crafts premium visuals for brands and individuals. 
          We specialize in storytelling that blends style and precision across photography, videography, drone work, podcasts, and event coverage.
        </p>
      </section>

      {/* Services */}
      <section className="bg-black py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-300 to-amber-600 bg-clip-text text-transparent">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 text-black shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <s.icon className="h-8 w-8 text-amber-500" />
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="text-black/70">{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-amber-700 mb-10">Portfolio</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {gallery.map((item, i) => (
            <figure key={i} className="overflow-hidden rounded-2xl border border-amber-200/70 bg-black">
              <img src={item.src} alt={item.caption} className="h-56 w-full object-cover" />
              <figcaption className="p-3 text-sm text-white/80">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-300 to-amber-600 bg-clip-text text-transparent">Contact</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-400" /> {contact.email}</p>
            <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-400" /> {contact.phone}</p>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-400" /> {contact.location}</p>
            <div className="flex gap-4 pt-2">
              {contact.socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="p-2 border border-white/10 rounded-lg hover:border-amber-400">
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-2xl p-6 text-black grid gap-4">
            <input className="border p-2 rounded" placeholder="Your Name" />
            <input className="border p-2 rounded" placeholder="Your Email" />
            <textarea rows={4} className="border p-2 rounded" placeholder="Your Message" />
            <button className="rounded bg-amber-500 px-4 py-2 text-black font-semibold hover:bg-amber-400">Send Inquiry</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white/60 py-6 border-t border-white/10">
        © {new Date().getFullYear()} KJ Visuals Studios — All rights reserved.
      </footer>
    </div>
  );
}
