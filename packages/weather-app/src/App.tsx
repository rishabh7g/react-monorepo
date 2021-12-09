import React, { useEffect, useState } from 'react';
import Weather from 'src/components/weather/Weather';
import './App.css';

function App() {
	const [latitude, setLatitude] = useState<number | undefined>();
	const [longitude, setLongitude] = useState<number | undefined>();
	const [data, setData] = useState<any>();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);

			const fetchData = async () => {
				if (latitude && longitude) {
					const weatherApiUrl = `${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
					await fetch(weatherApiUrl)
						.then((res) => res.json())
						.then((result) => {
							setData(result);
							console.log(result);
						});
				}
			};
			fetchData();
		});
	}, [latitude, longitude]);

	return (
		<div className='App'>
			{data ? <Weather weatherData={data} /> : <div>data not found</div>}
		</div>
	);
}

export default App;
