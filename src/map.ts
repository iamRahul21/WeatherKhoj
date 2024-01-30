import axios from 'axios';

const openstreetmap_url: string = 'https://nominatim.openstreetmap.org/search';

export async function getCityCoordinates(cityName: string): Promise<{ lat: number; lon: number } | null> {
    try {
        const response = await axios.get(openstreetmap_url, {
            params: { q: cityName, format: 'json' },
        });

        if (!response.data || response.data.length === 0) {
            return null;
        }

        const { lat, lon } = response.data[0];
        return { lat, lon };
    } catch (error) {
        throw error;
    }
}
