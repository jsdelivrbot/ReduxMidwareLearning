import axios from 'axios'


const API_KEY = "c6b14e960958241b0c941412a4e62914";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// to keep type consistant in reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';



// create action creator to send ajax request

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
