import { useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Social icon SVGs ── */
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Decorative top bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ── Brand & Quote ── */}
          <div className="flex flex-col gap-5">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent tracking-widest uppercase">
              JJH Store
            </span>
            <p className="text-gray-400 text-sm italic leading-relaxed border-l-2 border-purple-500 pl-4">
              "La moda è l'armatura con cui sopravvivere alla realtà di tutti i giorni."
            </p>
            <p className="text-gray-600 text-xs">— Bill Cunningham</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://linkedin.com/in/juan-josé-hoyos-a94b332aa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Juan José Hoyos"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-400 hover:border-pink-500 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-widest text-gray-300 uppercase">
              Enlaces rápidos
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Productos', to: '/gallery' },
                { label: 'Carrito', to: '/cart' },
                { label: 'Iniciar sesión', to: '/login' },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-gray-400 text-sm hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-4 h-px bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Newsletter ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-widest text-gray-300 uppercase">
              Boletín exclusivo
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Recibe las últimas tendencias y ofertas directamente en tu bandeja de entrada.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                id="footer-newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
              />
              <button
                type="submit"
                id="footer-subscribe-btn"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold tracking-wide hover:from-purple-500 hover:to-pink-500 active:scale-95 transition-all duration-200"
              >
                {subscribed ? '¡Suscrito! ✓' : 'Suscribir'}
              </button>
            </form>
          </div>

        </div>

        {/* ── Copyright ── */}
        <div className="mt-14 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-xs tracking-wide">
            © 2026 Juan José Hoyos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
