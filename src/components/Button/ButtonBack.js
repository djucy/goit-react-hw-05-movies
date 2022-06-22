
import { useLocation, useNavigate } from 'react-router-dom';



export const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <button type="button" onClick={onGoBack}>
     
    </button>
  );
};