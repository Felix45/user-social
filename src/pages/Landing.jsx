/**
 * @name Home
 * @description Home component displays the landing page
 * @returns {JSX.Element} - A React element that displays the landing page
 */
import About from '../components/About';
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';

const Home = () => (
  <>
    <Carousel />
    <About />
    <Gallery />
  </>
);

export default Home;
