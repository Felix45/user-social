/**
 * @name Gallery
 * @description  Gallery displays images in a grid
 * @returns {JSX.Element} - A React element that displays images in a grid
 */
import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import photos from '../data/photos';

const Gallery = () => {
  const [title, setTitle] = useState('Popular albums');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <section className="container mx-auto p-5 mt-3">
      <div className="flex border-b border-gray-300 justify-between mb-3">
        <h3 className="text-sm font-black mb-5 text-dist md:text-2xl">{title}</h3>
        <form>
          <select className="text-sm border-none bg-white rounded-md p-1 md:text-lg" onChange={(e) => handleChange(e)}>
            <option value="Popular albums">Popular albums</option>
            <option value="New albums">New albums</option>
          </select>
        </form>
      </div>
      <PhotoAlbum layout="masonry" photos={photos} />
    </section>
  );
};

export default Gallery;
