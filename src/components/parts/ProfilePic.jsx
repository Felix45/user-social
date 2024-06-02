import PropTypes from 'prop-types';
import { LuUser2 } from 'react-icons/lu';

const ProfilePic = ({ width, height }) => (
  <div
    className="flex justify-center items-center bg-gray-100 mb-3 rounded-full p-5 md:mx-auto"
    style={{
      width, height,
    }}
  >
    <LuUser2 size={70} className="text-dist md:mx-auto" />
  </div>
);

ProfilePic.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ProfilePic;
