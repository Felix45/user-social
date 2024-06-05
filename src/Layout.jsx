/**
 * @name Layout
 * @description Layout component wraps the entire application in a single layout file
 * @returns {JSX.Element} - A React element that wraps the entire application in the same layout
 */
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
