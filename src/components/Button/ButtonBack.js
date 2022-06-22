
import { useLocation, useNavigate } from 'react-router-dom';
import s from '../../views/MovieDetailsPage/MovieDetailsPage.module.css';



export const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
      <button type="button" className={s.button } onClick={onGoBack}>
     Back
    </button>
  );
};