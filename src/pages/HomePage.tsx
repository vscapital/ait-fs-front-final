import Search from '../components/Search.tsx';
import styles from './styles/HomePage.module.css';
import WeatherCard from '../components/WeatherCard.tsx';
import { useState } from 'react';
import WeatherData from '../types/weather-data.ts';
import { useWeather } from '../contexts/WeatherContext.tsx';
import { fetchWeather } from '../api/fetch-weather.ts';
import Card from '../components/Card.tsx';

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const { addToHistory } = useWeather();

  const handleSearch = async (searchValue: string) => {
    if (!searchValue.trim()) {
      alert('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);
    setCurrentWeather(null);

    try {
      const data = await fetchWeather(searchValue);
      setCurrentWeather(data);
      addToHistory(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch weather data'
      );
      setCurrentWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className={styles.result}>
        {loading && <Card>Loading...</Card>}
        {error && (
          <Card
            actions={[
              {
                name: 'Cancel',
                onClick: () => {
                  setError(null);
                },
              },
            ]}
          >
            <div className={styles.errorTitle}>API Error</div>
            <div className={styles.error}>{error}</div>
          </Card>
        )}

        {currentWeather && (
          <WeatherCard
            city={currentWeather.name}
            temperature={Math.round(currentWeather.main.temp)}
            icon={`https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
            description={currentWeather.weather[0].description}
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;
