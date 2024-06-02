import { LuUser2 } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({ id, name, albums }) => (
  <NavLink to={`/users/${id}`} key={id} className="flex mb-5 border-b border-dotted text-sm md:shadow-2xl md:rounded-xl md:py-5 md:border-none md:mb-5 md:flex-col">
    <div className="flex items-center bg-gray-100 mb-3 rounded-full p-5 w-[90px] h-[90px] md:mx-auto">
      <LuUser2 size={70} className="text-dist md:mx-auto md:mb-5" />
    </div>
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
