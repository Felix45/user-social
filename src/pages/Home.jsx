import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserList from '../components/parts/UserList';
import Loader from '../components/Loader';
import { fetchPeopleThunk } from '../redux/slices/peopleSlice';
import { fetchAlbumsThunk } from '../redux/slices/albumSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { profile } = useSelector((state) => state.profile);
  const { people } = useSelector((state) => state.people);
  const { albums } = useSelector((state) => state.albums);

  if (!profile) {
    navigate('/');
  }

  useEffect(() => {
    setLoading(true);
    Promise.resolve(dispatch(fetchPeopleThunk())).then(() => {
      dispatch(fetchAlbumsThunk());
    }).then(() => { setLoading(false); });
  }, []);

  return (
    <>
      {
        loading ? (<Loader />)
          : (
            <section className="flex lg:mt-20">
              <UserList users={people} albums={albums} />
            </section>
          )
           }
    </>
  );
};

export default Home;
