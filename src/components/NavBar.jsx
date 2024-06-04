import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';
import { googleLogout } from '@react-oauth/google';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import { logout } from '../redux/slices/authSlice';
import { setProfile } from '../redux/slices/profileSlice';

const NavBar = () => {
  const urls = {
    Users: '/users',
  };

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState('hidden');
  const { profile } = useSelector((state) => state.profile);

  const handleMenu = (close) => {
    setOpen(close);
    if (close) {
      setMobile('');
    } else {
      setMobile('hidden');
    }
  };

  const logOut = () => {
    googleLogout();
    dispatch(logout());
    dispatch(setProfile(null));
  };

  return (

    <header className="bg-black p-5 shadow-lg">
      <div className="container flex mx-auto justify-between items-center">
        <NavLink to="/" className="text-white font-bold text-2xl">
          <span to="/">Pixar.</span>
        </NavLink>
        <nav className="flex justify-end md:justify-center">
          {
          profile && (
          <ul className={`${mobile} z-20 flex flex-col shadow-lg absolute bg-black w-3/4 top-16 right-0 bottom-0 text-white md:shadow-none md:items-center md:flex md:mr-5 md:flex-row md:static md:top-0`}>
            {
          Object.keys(urls).map((item) => (

            <li key={uuidv4()} className="p-4 font-bold border-dotted border-b md:border-0 md:px-1">
              <NavLink to={urls[item]} className="block">{item}</NavLink>
            </li>
          ))
         }

            <li className="p-4 font-bold border-dotted border-b md:border-0 md:hidden md:px-1">
              <NavLink onClick={() => logOut()} className="block">Logout</NavLink>
            </li>
          </ul>
          )
}

          <ul className="flex items-center">
            {
              profile && (
              <li className="text-white px-5 text-4xl md:hidden">
                { open ? <IoClose onClick={() => handleMenu(false)} />
                  : <CgMenuRightAlt onClick={() => handleMenu(true)} /> }
              </li>
              )
}
            <li>
              <Login />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
