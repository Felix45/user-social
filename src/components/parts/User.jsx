/**
 * User component
 * @description User component that displays details of a user
 * @param {Object} user - An object containing the user details like id, name, and albums count
 * @returns {JSX.Element} - A React element that renders a user profile icon, name, and albums count
 */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfilePic from './ProfilePic';

const User = ({ id, name, albums }) => (
  <NavLink to={`/users/${id}`} key={id} className="flex mb-5 border-b border-dotted text-sm md:shadow-2xl md:rounded-xl md:py-5 md:border-none md:mb-5 md:flex-col">
    <ProfilePic width="90px" height="90px" />
    <div className="ml-3 md:text-center md:mx-auto">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="flex items-end md:justify-center">
        <div className="flex font-bold bg-dist text-white p-2 mt-2 justify-center items-center h-[40px] w-[40px] rounded-full">{ albums }</div>
        <div className="text-lg ml-1">Albums </div>
      </div>
    </div>
  </NavLink>
);

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  albums: PropTypes.number.isRequired,
};

export default User;
