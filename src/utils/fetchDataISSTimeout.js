import { fetchLocationISS, fetchPersonsISS } from '../store/actions/issAction';

const fetchDataISSTimeout = (dispatch, timeout) => {
  const fetchData = () => {
    dispatch(fetchLocationISS());
    dispatch(fetchPersonsISS());
    setTimeout(fetchData, timeout);
  };

  fetchData();
};

export default fetchDataISSTimeout;
