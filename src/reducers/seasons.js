import * as Types from '../types';

const initialState = {
  currentSeason: {},
  seasons: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_SEASONS_SUCCESS:
      return {
        ...state,
        seasons: action.response.data
      };
    case Types.FETCH_SEASON_SUCCESS:
      return {
        ...state,
        currentSeason: action.response.data
      };
    default:
      return state;
  }
}