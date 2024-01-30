import axios from 'axios';

const openweathermap_url: string = 'https://api.openweathermap.org/data/2.5/weather';
const API_key: string = '28a9c0c2a57a15fe55050ac0c927cbce';

export async function getWeatherData(lat: number, lon: number): Promise<any> {
    try {
        const response = await axios.get(openweathermap_url, {
            params: { lat, lon, appid: API_key, units: 'metric' },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}
