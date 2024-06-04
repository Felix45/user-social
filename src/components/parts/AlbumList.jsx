/**
 * @name AlbumList
 * @description AlbumList component that displays a list of album items
 * @param {Object} user - An object containing the user details like id, name, email
 * @param {Array} albums - An array containing the album items
 * @returns {JSX.Element} - Rendered AlbumList component
 */
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Album from './Album';

const AlbumList = ({ user, albums }) => {
  const albumsByPerson = (personId) => albums.filter((album) => album.userId === personId);
  const albumCount = albumsByPerson(user.id).length;

  return (
    <>
      <h2 className="container mx-auto font-bold text-dist font-black text-2xl p-5 mt-2 xl:px-0">
        Albums (
        {albumCount}
        )
      </h2>
      <ul className="container mx-auto px-5 xl:p-0">
        {
            albumsByPerson(user.id).map((album) => (
              <Album key={uuidv4()} album={album} />
            ))
          }
      </ul>
    </>
  );
};

AlbumList.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  albums: PropTypes.instanceOf(Array).isRequired,
};

export default AlbumList;
