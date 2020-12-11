import axios from 'axios';
import { locationIssURL, personsIssURL } from '../constants/api';
import { FETCH_LOCATION_ISS, FETCH_PERSON_ISS } from '../constants/types';

export const fetchLocationISS = () => async (dispatch) => {
  const locationISS = await axios.get(locationIssURL);
  dispatch({
    type: FETCH_LOCATION_ISS,
    payload: {
      locationISS: locationISS.data,
    },
  });
};

export const fetchPersonsISS = () => async (dispatch) => {
  const personsISS = await axios.get(personsIssURL);
  dispatch({
    type: FETCH_PERSON_ISS,
    payload: {
      personsISS: personsISS.data,
    },
  });
};
