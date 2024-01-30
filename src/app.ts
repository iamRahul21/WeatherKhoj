import express from 'express';
import cors from 'cors'; // Import the cors middleware
import { getCityCoordinates } from './map';
import { getWeatherData } from './weather';

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500', // Update with your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use(express.static('public')); // Serve static files from 'public' folder

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/getWeather', async (req, res) => {
    try {
        const cityName: string = req.query.city as string;
        if (!cityName) {
            return res.status(400).json({ error: 'City parameter is missing or invalid' });
        }

        const cityCoordinates = await getCityCoordinates(cityName);

        if (!cityCoordinates) {
            return res.status(404).json({ error: 'City not found; change the cityName in the URL.' });
        }

        const { lat, lon } = cityCoordinates;
        const weatherData = await getWeatherData(lat, lon);

        const { temp, feels_like, humidity } = weatherData.main;

        res.status(200).json({ weather: { temp, feels_like, humidity } });
        // res.status(200).send(`
        //     <script>
        //         document.getElementById('tempValue').innerText = '${temp}';
        //         document.getElementById('feelsLikeValue').innerText = '${feels_like}';
        //         document.getElementById('humidityValue').innerText = '${humidity}';
        //     </script>
        // `); 
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}, click here: "http://localhost:3000/getWeather?city=cityName"`);
});
