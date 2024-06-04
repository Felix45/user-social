import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import capitalizeWord from '../../lib/capitalize';

const Photo = ({ photo }) => {
  const { id, thumbnailUrl, title } = photo;

  return (
    <NavLink to={`/photos/${id}`} className="shadow-2xl p-5 md:py-10">
      <img key={photo.id} src={thumbnailUrl} alt={title} className="mx-auto md:h-[150px] md:w-[150px]" />
      <p className="hidden font-bold text-center mt-5 md:block">
        { title ? capitalizeWord(title.slice(0, 20)) : '' }
        ...
      </p>
    </NavLink>
  );
};

Photo.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
};

export default Photo;
