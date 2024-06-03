import { useEffect } from 'react';
import { ImSpinner3 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PhotoList from '../components/parts/PhotoList';

import { fetchPhotosThunk } from '../redux/slices/photoSlice';
import { fetchAlbumDetailThunk } from '../redux/slices/albumDetailSlice';

const AlbumDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { profile } = useSelector((state) => state.profile);
  const { photos } = useSelector((state) => state.photos);
  const { album } = useSelector((state) => state.album);

  const { id } = useParams();
  const { title } = album;

  if (!profile) {
    navigate('/');
  }

  useEffect(() => {
    Promise.resolve(dispatch(fetchAlbumDetailThunk(id))).then(() => {
      dispatch(fetchPhotosThunk(id));
    });
  }, [id]);

  return (
    <section>
      {
          Array.isArray(photos) ? <PhotoList photos={photos} title={title} /> : <ImSpinner3 />
       }
    </section>
  );
};

export default AlbumDetail;
