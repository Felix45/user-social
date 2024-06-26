/**
 * @name Album
 * @description Album component that displays details of an album
 * @param {Object} album - An object containing the album details like id, name, title
 * @returns {JSX.Element} - Rendered Album component
 */

import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import albumPic from '../../assets/album.png';

const Album = ({ album }) => {
  const { name, title } = album;
  return (
    <li>
      <NavLink to={`/albums/${album.id}`} className="flex w-full bg-gray-100 p-5 justify-between items-center shadow-2xl mb-5">
        <div className="flex items-center">
          <img src={albumPic} alt={name} className="w-[50px] h-[50px] mr-2" />
          <h2 className="font-bold text-sm">{title}</h2>
        </div>
        <div className="flex items-center justify-center bg-gray-100 rounded-full p-2 shadow-2xl">
          <FaPlay className="text-dist ml-[2px]" />
        </div>
      </NavLink>
    </li>
  );
};

Album.propTypes = {
  album: PropTypes.instanceOf(Object).isRequired,
};

export default Album;
