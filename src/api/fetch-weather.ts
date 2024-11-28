import WeatherData from '../types/weather-data';

const API_KEY = '9b074ad956134784824ad2e8ec708427';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as WeatherData;
};
