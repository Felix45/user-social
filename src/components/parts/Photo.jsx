import PropTypes from 'prop-types';

const Photo = ({ photo }) => {
  const { thumbnailUrl, title } = photo;

  return (
    <div className="shadow-2xl p-5 md:py-10">
      <img key={photo.id} src={thumbnailUrl} alt={title} className="mx-auto md:h-[150px] md:w-[150px]" />
      <p className="hidden font-bold text-center mt-5 md:block">
        {`${title.slice(0, 1).toUpperCase()}${title.slice(1, 20)}`}
        ...
      </p>
    </div>
  );
};

Photo.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
};

export default Photo;
