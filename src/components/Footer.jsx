/**
 * @name Footer
 * @description Footer component that displays the footer of the page
 * @returns {JSX.Element} - A React component that renders the footer of the page
 
 */
const Footer = () => (
  <footer className="bg-black text-white p-5">
    <div className="container mx-auto flex border-t mt-5 pt-3">
      <div className="text-lg font-bold">
        &copy; 2024
        <span> Pixar.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
