/**
 * @name PhotoEdit
 * @description PhotoEdit component displays an image and a form to edit a photo title
 * @returns {JSX.Element} - A React element that displays an image and a form to edit a photo title
 */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import capitalizeWord from '../lib/capitalize';
import { fetchPhotoDetailThunk, editPhotoDetailThunk, updateTitle } from '../redux/slices/photoEditSlice';

const PhotoEdit = () => {
  const { id } = useParams();
  const [newTitle, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { photo } = useSelector((state) => state.photo);
  const { profile } = useSelector((state) => state.profile);

  const { title, url } = photo;

  if (!profile) {
    navigate('/');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newTitle) {
      setError('Title cannot be empty!');
      return;
    }
    setLoading(true);
    Promise.resolve(
      dispatch(editPhotoDetailThunk({ id, title: newTitle })),
    ).then(
      (response) => {
        dispatch(updateTitle(response.payload.title));
      },
    ).then(() => {
      setSuccess('Title updated successfully!');
      setTitle('');
      setLoading(false);
    });
  };

  const handleChange = (e) => {
    setError(null);
    setSuccess(null);
    setTitle(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    Promise.resolve(dispatch(fetchPhotoDetailThunk(id))).then(() => {
      setLoading(false);
    });
  }, [id]);

  return (
    <section className="container mx-auto p-5 md:px-5 xl:px-0">
      {
    loading ? <Loader />
      : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="shadow-2xl p-5">
            <img src={url} alt={title} />
            <h3 className="font-bold text-lg mt-5">
              {capitalizeWord(title)}
            </h3>
          </div>
          <div>
            <form className="flex flex-col gap-5 shadow-2xl rounded-lg p-5 md:ml-5" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="title" className="block mb-2 font-bold border-b pb-2">Edit Photo Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newTitle}
                  className="border mt-2 py-1 px-2 rounded-md w-full focus:outline-none"
                  onChange={(e) => handleChange(e)}
                />
                {error && <div className="bg-rose-100 text-dist rounded-md text-sm mt-2 p-2">{error}</div>}
                {success && <div className="bg-green-100 text-green-500 rounded-md text-sm mt-2 p-2">{success}</div>}
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-dist rounded-md font-bold text-white px-10 py-1 border-none">Save</button>
              </div>
            </form>
          </div>
        </div>
      )
}
    </section>

  );
};

export default PhotoEdit;
