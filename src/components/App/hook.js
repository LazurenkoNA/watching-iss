import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchDataISSTimeout from '../../utils/fetchDataISSTimeout';

const useApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataISSTimeout(dispatch, 5000);
  }, []);
};

export default useApp;
