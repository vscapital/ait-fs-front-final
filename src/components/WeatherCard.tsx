import Card, { Action } from './Card.tsx';
import styles from './styles/WeatherCard.module.css';

interface WeatherCardProps {
  city: string;
  temperature: number;
  icon: string;
  description?: string;
  actions?: Action[];
}

function WeatherCard({
  city,
  temperature,
  icon,
  description,
  actions,
}: WeatherCardProps) {
  return (
    <Card actions={actions}>
      <div className={styles.weatherContent}>
        <div className={styles.temperature}>{temperature}°</div>
        <div className={styles.city}>{city}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.weatherIcons}>
          <img src={icon} alt="Weather icon" />
          <img src={icon} alt="Weather icon" />
          <img src={icon} alt="Weather icon" />
        </div>
      </div>
    </Card>
  );
}

export default WeatherCard;
