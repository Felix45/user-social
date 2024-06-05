/**
 * @name About
 * @description A component that displays information about the app
 * @returns A React Component that displays information about the app
 
 */
const About = () => (
  <section className="container mx-auto p-5">
    <h1 className="text-3xl font-black mb-3 text-dist border-b pb-3">About Pixar.</h1>
    <p className="first-letter:float-left first-letter:text-7xl first-letter:pr-2 first-letter:text-dist first-letter:font-bold text-justify">
      Pixar provides a convenient and enjoyable way for users to preserve and share
      their cherished moments with friends, family, and the world. The app&apos;s interface
      is clean and user-friendly, designed with soft pastel colors to evoke a
      sense of nostalgia and warmth.
    </p>
  </section>
);

export default About;
