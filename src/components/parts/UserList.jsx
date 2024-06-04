/**
 * @name UserList
 * @description UserList component that displays a list of users with their album count
 * @param {Array} users - An array containing the users
 * @param {Array} albums - An array containing the albums of a user
 * @returns {JSX.Element} - A React Component that lists all the users
 */
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import User from './User';

const UserList = ({ users, albums }) => {
  const albumsByPerson = (personId) => albums.filter((album) => album.userId === personId).length;

  return (
    <section className="container mx-auto p-5 grid grid-cols-1 gap-5 mb-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:p-0">
      {
        users.map((user) => (
          <User key={uuidv4()} id={user.id} name={user.name} albums={albumsByPerson(user.id)} />
        ))
      }
    </section>
  );
};

UserList.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  albums: PropTypes.instanceOf(Array).isRequired,
};

export default UserList;
