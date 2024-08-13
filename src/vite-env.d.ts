interface ProcessEnv {
    readonly VITE_REACT_APP_WEATHER_API_URL: string;
    readonly VITE_REACT_APP_WEATHER_API_KEY: string;
}

interface ImportMeta{
    readonly env: ProcessEnv
}