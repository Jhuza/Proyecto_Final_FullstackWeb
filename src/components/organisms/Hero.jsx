import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black min-h-[92vh] flex items-center justify-center">

      {/* Animated gradient orbs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-8">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Nueva colección 2026
        </span>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight text-white tracking-tight">
          Viste tu{' '}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            mejor versión
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-xl leading-relaxed">
          Descubre piezas únicas que hablan por ti. Estilo, calidad y actitud — todo en un solo lugar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            to="/gallery"
            id="hero-explore-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-base hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 transition-all duration-300"
          >
            Explorar productos
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/cart"
            id="hero-cart-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-600 text-gray-300 font-semibold text-base hover:border-purple-500 hover:text-purple-300 hover:bg-purple-500/10 active:scale-95 transition-all duration-300"
          >
            Ver carrito
          </Link>
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 text-center">
          {[
            { value: '+500', label: 'Productos' },
            { value: '+2k', label: 'Clientes' },
            { value: '4.9★', label: 'Rating' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-2xl font-extrabold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                {value}
              </span>
              <span className="text-gray-500 text-xs uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
