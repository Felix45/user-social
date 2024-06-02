import PropTypes from 'prop-types';
import ProfilePic from './ProfilePic';

const UserDetailsHeader = ({ user }) => {
  const {
    name, email, phone, website, company, address,
  } = user;
  const {
    street, suite, city, zipcode,
  } = address;
  return (
    <div>
      <div className="min-h-[150px] flex justify-center p-5 bg-dist relative">
        <div className="absolute -bottom-12">
          <ProfilePic width="120px" height="120px" />
        </div>
      </div>
      <div className="text-center mt-12">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h3 className="text-xl">{company.name}</h3>
        <p className="text-sm">{email}</p>
        <p className="text-sm">{phone}</p>
        <p className="text-sm">{website}</p>
        <p className="text-sm mt-3">
          {street}
          ,
          {' '}
          {suite}
          ,
          {' '}
          {city}
          ,
          {' '}
          {zipcode}
        </p>
      </div>
    </div>
  );
};

UserDetailsHeader.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default UserDetailsHeader;
