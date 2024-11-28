import WeatherData from '../types/weather-data';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  if (!API_KEY) {
    throw new Error('Weather API key not found');
  }

  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as WeatherData;
};
