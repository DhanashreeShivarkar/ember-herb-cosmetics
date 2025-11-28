"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
  <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
    
    <div className="text-2xl font-bold text-emerald-800 cursor-pointer hover:scale-105 transition">
      Ember Herb
    </div>

    <nav className="flex space-x-8 text-emerald-800 font-medium">
      <a className="hover:text-emerald-600 transition" href="#">Home</a>
      <a className="hover:text-emerald-600 transition" href="#">Products</a>
      <a className="hover:text-emerald-600 transition" href="#">Herbal Care</a>
      <a className="hover:text-emerald-600 transition" href="#">About</a>
      <a className="hover:text-emerald-600 transition" href="#">Contact</a>
    </nav>

  </div>
</header>
  );
}
