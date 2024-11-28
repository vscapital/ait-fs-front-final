declare namespace NodeJS {
  interface ProcessEnv {
    VITE_APP_BASE?: string;
    NODE_ENV: 'development' | 'production';
    // Add other environment variables you use
  }
}
