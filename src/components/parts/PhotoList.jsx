/**
 * @name PhotoList
 * @description PhotoList component that displays a list of photo items in an album
 * @param {String} title - The title of the album
 * @param {Array} photos - An array containing the photo items
 * @returns {JSX.Element} - A React element that renders a list of photos
 */
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Photo from './Photo';
import AlbumHeaderDetails from './AlbumDetailsHeader';

const PhotoList = ({ title, photos }) => (
  <>
    <AlbumHeaderDetails title={title} />
    <h2 className="container mx-auto font-bold text-dist font-black text-2xl p-5 mt-2 xl:px-0">
      Photos (
      { photos.length }
      )
    </h2>
    <section className="container mx-auto p-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:px-0">
      {
            photos.map((photo) => (
              <Photo key={uuidv4()} photo={photo} />
            ))
        }
    </section>
  </>
);

PhotoList.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.instanceOf(Array).isRequired,
};

export default PhotoList;
