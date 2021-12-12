import React, { useEffect, useState } from 'react';
import Navbar from 'src/components/navbar/Navbar';
import WeatherCard from 'src/components/weather-card/WeatherCard';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const TopNavbar = styled(Navbar)`
	height: 4rem;
`;

const WeatherDetails = styled.div`
	height: calc(100vh - 4rem);
	margin: 0 20%;
	background: linear-gradient(#ffeeee 10%, white 20%);
`;

const MainDetail = styled.div`
	margin: 2rem;
	display: flex;
	gap: 1rem;
`;

const CityDetail = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Paragraph = styled.p`
	margin: 0;
`;

const CityName = styled(Paragraph)`
	font-size: var(--font-size-display);
	line-height: var(--font-size-display-line-height);
`;

const Date = styled(Paragraph)`
	font-size: var(--font-size-body);
	line-height: var(--font-size-body-line-height);
`;

const FutureDetail = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin-top: 10%;

	& > * {
		cursor: pointer;
		transition: box-shadow 200ms ease-in-out;
	}
	& > *:hover {
		box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
	}
`;

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
			<Container>
				<TopNavbar />
				<WeatherDetails>
					<MainDetail>
						<WeatherCard></WeatherCard>
						<CityDetail>
							<CityName>Bangalore</CityName>
							<Date>9th Dec 2021</Date>
							<Date>Thursday</Date>
						</CityDetail>
					</MainDetail>
					<FutureDetail>
						<WeatherCard></WeatherCard>
						<WeatherCard></WeatherCard>
						<WeatherCard></WeatherCard>
						<WeatherCard></WeatherCard>
					</FutureDetail>
				</WeatherDetails>
			</Container>
		</div>
	);
}

export default App;
