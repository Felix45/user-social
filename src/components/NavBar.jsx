import { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

const NavBar = () => {
  const urls = {
    Home: '/',
    About: '/about',
    People: '/people',
    Albums: '/albums',
  };

  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState('hidden');

  const handleMenu = (close) => {
    setOpen(close);
    if (close) {
      setMobile('');
    } else {
      setMobile('hidden');
    }
  };

  return (

    <header className="bg-black p-5 shadow-lg">
      <div className="container flex mx-auto justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <span>Pixar.</span>
        </div>
        <nav className="flex justify-end md:justify-center">
          <ul className={`${mobile} z-20 flex flex-col shadow-lg absolute bg-black w-3/4 top-20 right-0 bottom-0 text-white md:shadow-none md:items-center md:flex md:mr-5 md:flex-row md:static md:top-0`}>
            {
          Object.keys(urls).map((item) => <li key={uuidv4()} className="p-4 border-dotted border-b md:border-0 md:px-4">{item}</li>)
         }
          </ul>

          <ul className="flex items-center">
            <li className="text-white px-5 text-4xl md:hidden">
              { open ? <IoClose onClick={() => handleMenu(false)} />
                : <CgMenuRightAlt onClick={() => handleMenu(true)} /> }
            </li>
            <li>
              <button type="button" className="px-4 py-2 bg-white text-black font-bold rounded-md">
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
