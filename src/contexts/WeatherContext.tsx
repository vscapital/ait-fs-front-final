import { createContext, ReactNode, useContext, useState } from 'react';
import WeatherData from '../types/weather-data.ts';

interface WeatherContextType {
  weatherHistory: WeatherData[];
  addToHistory: (data: WeatherData) => void;
  clearHistory: () => void;
  removeFromHistory: (index: number) => void;
}

const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherHistory, setWeatherHistory] = useState<WeatherData[]>([]);

  const addToHistory = (data: WeatherData) => {
    setWeatherHistory((prev) => [data, ...prev]);
  };

  const clearHistory = () => {
    setWeatherHistory([]);
  };

  const removeFromHistory = (index: number) => {
    setWeatherHistory((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherHistory,
        addToHistory,
        clearHistory,
        removeFromHistory,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within WeatherProvider');
  }
  return context;
};
