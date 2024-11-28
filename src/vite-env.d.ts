/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_BASE: string;
  readonly VITE_WEATHER_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
