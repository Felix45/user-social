import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImSpinner3 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import UserList from '../components/parts/UserList';

import { fetchPeopleThunk } from '../redux/slices/peopleSlice';
import { fetchAlbumsThunk } from '../redux/slices/albumSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { profile } = useSelector((state) => state.profile);
  const { people } = useSelector((state) => state.people);
  const { albums } = useSelector((state) => state.albums);

  if (!profile) {
    navigate('/');
  }

  useEffect(() => {
    dispatch(fetchPeopleThunk());
    dispatch(fetchAlbumsThunk());
  }, []);

  return (
    <section className="flex lg:mt-20">
      {
            Array.isArray(people) ? (
              <UserList users={people} albums={albums} />
            ) : (
              <div>
                <ImSpinner3 />
              </div>
            )
           }
    </section>
  );
};

export default Home;
