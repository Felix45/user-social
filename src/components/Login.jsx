import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { BsGoogle } from 'react-icons/bs';
import { userLoginThunk, logout } from '../redux/slices/authSlice';
import { userProfileThunk, setProfile } from '../redux/slices/profileSlice';
import UserInfo from './UserInfo';

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { profile } = useSelector((state) => state.profile);

  const logIn = useGoogleLogin({
    onSuccess: (codeResponse) => dispatch(userLoginThunk(codeResponse)),
    onError: (error) => error,
  });

  useEffect(() => {
    if (user) {
      dispatch(userProfileThunk(user));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    dispatch(logout());
    dispatch(setProfile(null));
  };

  return (
    <div>
      { profile ? (
        <div className="flex">
          <UserInfo />
          <button type="button" onClick={() => logOut()} className="hidden px-4 py-2 bg-white text-black ml-10 font-bold rounded-md items-center md:flex">
            Logout
          </button>
        </div>
      )
        : (
          <button type="button" onClick={() => logIn()} className="flex px-4 py-2 bg-white text-black font-bold rounded-md items-center">
            <BsGoogle className="mr-1" />
            {' '}
            Login
          </button>
        ) }
    </div>
  );
};

export default Login;
