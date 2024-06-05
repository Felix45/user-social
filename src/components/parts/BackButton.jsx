import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto my-3 flex w-full px-5 justify-end xl:px-0">
      <button type="button" onClick={() => navigate(-1)} className="text-xl text-dist font-bold"> &laquo; Back</button>
    </div>
  );
};

export default BackButton;
