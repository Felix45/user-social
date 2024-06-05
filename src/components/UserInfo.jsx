/**
 * @name UserInfo
 * @description  UserInfo displays user information
 * @returns {JSX.Element} - A React element that displays user information like name, email, and picture
 */
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { profile } = useSelector((state) => state.profile);
  const { email, name, picture } = profile;

  return (
    <div className="flex">
      <img src={picture} alt={name} className="rounded-full mr-2 w-[40px] h-[40px]" />
      <div className="flex flex-col text-white text-sm font-bold mr-2 hidden md:flex md:font-bold">
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
