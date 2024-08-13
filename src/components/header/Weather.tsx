import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather: React.FC = () => {

    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
    const API_URL = import.meta.env.VITE_REACT_APP_WEATHER_API_URL

    useEffect(() => {
        getWeather()
    }, []);

    const getWeather = async () => {
        try {
            const {data} = await axios.get(`${API_URL}/weather?q=${'seoul'}&appid=${API_KEY}&units=metric`)
            console.log(data)
            if(data){
                const weatherIcon = data.weather[0].icon
                const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                setWeatherData(weatherIconAdrs)
            }else{
                setError("데이터를 가져오지 못했습니다");
            }
            setLoading(false);
        } catch (err: any) {
            setError(err.message)
            setLoading(false);
        }
    }

    if (loading) return <p>로딩중...</p>;
    if (error) return <p>에러: {error}</p>;

    return (
        <div>
            {weatherData && <img src={weatherData} alt="Weather Icon" />}
        </div>
    )
}

export default Weather