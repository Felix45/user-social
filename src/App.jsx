import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import About from './components/About';
import Gallery from './components/Gallery';

const App = () => (
  <main className="min-h-full">
    <NavBar />
    <div className="min-h-screen">
      <Carousel />
      <About />
      <Gallery />
    </div>
    <Footer />
  </main>
);

export default App;
