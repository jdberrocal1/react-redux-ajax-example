import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      const cityData = action.payload.data;
      return cityData ? [action.payload.data, ...state] : state;
  }
  return state;
}

