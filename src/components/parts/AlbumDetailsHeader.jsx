import PropTypes from 'prop-types';
import albumPic from '../../assets/album.png';
import capitalizeWord from '../../lib/capitalize';

const AlbumHeaderDetails = ({ title }) => {
  const albumTitle = capitalizeWord(title);

  return (
    <div className="min-h-[150px] flex justify-left p-5 bg-dist relative">
      <div className="container mx-auto flex items-center">
        <img src={albumPic} alt="Album details page" className="w-[100px]" />
        <h1 className="text-lg font-bold text-white ml-2 md:text-xl lg:text-2xl">
          Album
          {' '}
          <br />
          {albumTitle}
        </h1>
      </div>
    </div>
  );
};

AlbumHeaderDetails.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AlbumHeaderDetails;
