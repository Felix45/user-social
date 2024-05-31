import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Layout = () => (
  <main className="min-h-full">
    <NavBar />
    <div className="min-h-screen">
      <Outlet />
    </div>
    <Footer />
  </main>
);

export default Layout;
