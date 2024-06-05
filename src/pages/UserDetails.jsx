/**
 * @name UserDetails
 * @description UserDetails component displays a user's details and their albums
 * @returns {JSX.Element} - A React element that displays a user's details and their albums
 */
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import UserDetailsHeader from '../components/parts/UserDetailsHeader';
import { fetchPeopleThunk } from '../redux/slices/peopleSlice';
import { fetchAlbumsThunk } from '../redux/slices/albumSlice';
import AlbumList from '../components/parts/AlbumList';
import Loader from '../components/Loader';

const UserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
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

  const user = people.find((person) => person.id === parseInt(id, 10));

  return (
    <section>
      {
        loading ? (<Loader />) : (
          <>
            <UserDetailsHeader user={user} />
            <AlbumList user={user} albums={albums} />
          </>
        )
}
    </section>
  );
};

export default UserDetails;
