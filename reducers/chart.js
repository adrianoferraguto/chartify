import { apiGetChartUrl } from '../apiParams';

export const GET_CHART = 'SpotifyCharts/chartItems/LOAD';
export const GET_CHART_SUCCESS = 'SpotifyCharts/chartItems/LOAD_SUCCESS';
export const GET_CHART_FAIL = 'SpotifyCharts/chartItems/LOAD_FAIL';

export default function reducer(state = { chartItems: [] }, action) {
  switch (action.type) {
    case GET_CHART:
      return { ...state, loading: true, region: action.payload.region, date: action.payload.date };
    case GET_CHART_SUCCESS:
      return { ...state, loading: false, chartItems: action.payload.data };
    case GET_CHART_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error in getting chart'
      };
    default:
      return state;
  }
}

export function getChart(region, date) {
  return {
    type: GET_CHART,
    payload: {
      request: {
        url: apiGetChartUrl,
        params: {
          region: region,
          date: date
        }
      },
      region: region,
      date: date
    }
  };
}
