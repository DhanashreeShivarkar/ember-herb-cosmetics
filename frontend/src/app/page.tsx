"use client";
import { useRef } from "react";

export default function Home() {
  const productsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-32 text-center">
        <h1 className="text-6xl font-extrabold text-emerald-900 tracking-tight">
          Pure Herbal Beauty
        </h1>
        <p className="text-lg text-emerald-700 mt-6 max-w-2xl mx-auto leading-relaxed">
          Scientifically formulated natural cosmetics for healthy, glowing skin & hair.
        </p>
        <button
          onClick={scrollToProducts}
          className="mt-10 bg-emerald-700 hover:bg-emerald-900 text-white font-semibold px-8 py-3 rounded-lg shadow-md transform hover:scale-105 transition"
        >
          Shop Products
        </button>
      </section>

      {/* ⭐ FEATURED PRODUCTS SECTION */}
      <section ref={productsRef} className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">
          Featured Herbal Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl hover:scale-105 transition">
            <div className="h-40 bg-emerald-100 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-emerald-900">Organic Neem Serum</h3>
            <p className="text-emerald-700 text-sm mt-2">Anti-acne, antibacterial & skin clarifying.</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl hover:scale-105 transition">
            <div className="h-40 bg-emerald-100 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-emerald-900">Aloe Hydration Gel</h3>
            <p className="text-emerald-700 text-sm mt-2">Deep hydration and skin repair.</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl hover:scale-105 transition">
            <div className="h-40 bg-emerald-100 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-emerald-900">Herbal Hair Vital Oil</h3>
            <p className="text-emerald-700 text-sm mt-2">Strengthens scalp & reduces hair fall.</p>
          </div>

        </div>
      </section>
    </>
  );
}
