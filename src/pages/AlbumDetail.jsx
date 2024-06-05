/**
 * @name AlbumDetail
 * @description AlbumDetail component displays a list of photos in an album and an albums title
 * @returns {JSX.Element} - A React element that displays a list of photos in an album
 *                          and an albums title
 */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PhotoList from '../components/parts/PhotoList';
import Loader from '../components/Loader';

import { fetchPhotosThunk } from '../redux/slices/photoSlice';
import { fetchAlbumDetailThunk } from '../redux/slices/albumDetailSlice';

const AlbumDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { profile } = useSelector((state) => state.profile);
  const { photos } = useSelector((state) => state.photos);
  const { album } = useSelector((state) => state.album);

  const { id } = useParams();
  const { title } = album;

  if (!profile) {
    navigate('/');
  }

  useEffect(() => {
    setLoading(true);
    Promise.resolve(dispatch(fetchAlbumDetailThunk(id))).then(() => {
      dispatch(fetchPhotosThunk(id));
    }).then(() => { setLoading(false); });
  }, [id]);

  return (
    <section>
      {
          loading ? <Loader /> : <PhotoList photos={photos} title={title} />
       }
    </section>
  );
};

export default AlbumDetail;
