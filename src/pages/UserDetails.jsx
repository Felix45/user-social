import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import UserDetailsHeader from '../components/parts/UserDetailsHeader';
import { fetchPeopleThunk } from '../redux/slices/peopleSlice';
import { fetchAlbumsThunk } from '../redux/slices/albumSlice';
import AlbumList from '../components/parts/AlbumList';

const UserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
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

  const user = people.find((person) => person.id === parseInt(id, 10));

  return (
    <section>
      <UserDetailsHeader user={user} />
      <AlbumList user={user} albums={albums} />
    </section>
  );
};

export default UserDetails;
