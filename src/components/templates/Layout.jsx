import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../organisms/NavBar/NavBar';
import Hero from '../organisms/Hero';
import Footer from '../organisms/Footer';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/gallery';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      {isHome && <Hero />}
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
