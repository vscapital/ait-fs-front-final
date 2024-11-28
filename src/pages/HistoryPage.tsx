import styles from './styles/HistoryPage.module.css';
import WeatherCard from '../components/WeatherCard';
import { useWeather } from '../contexts/WeatherContext';
import Card from '../components/Card';

function HistoryPage() {
  const { weatherHistory, clearHistory, removeFromHistory } = useWeather();

  if (weatherHistory.length === 0) {
    return (
      <div className={styles.emptyState}>
        <Card>
          <div className={styles.emptyStateText}>No weather searches yet</div>
        </Card>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {weatherHistory.map((weather, index) => (
          <WeatherCard
            key={`${weather.name}-${String(index)}`}
            city={weather.name}
            temperature={Math.round(weather.main.temp)}
            icon={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            description={weather.weather[0].description}
            actions={[
              {
                name: 'Delete',
                onClick: () => {
                  removeFromHistory(index);
                },
              },
            ]}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <button onClick={clearHistory} className={styles.clearButton}>
          Delete all cards
        </button>
      </div>
    </div>
  );
}

export default HistoryPage;
