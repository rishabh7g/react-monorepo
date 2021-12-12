import moment from 'moment';
import React, { useEffect, useState } from 'react';
import WeatherCard from 'src/components/weather-card/WeatherCard';
import styled from 'styled-components';

const WeatherDetailsWrapper = styled.div`
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

interface WeatherDetailsProps {
	city: string | undefined;
}

const WeatherDetails = ({ city }: WeatherDetailsProps) => {
	const [cityName, setCityName] = useState<string>('');
	const [temperature, setTemperature] = useState<string>('');
	const [weatherType, setWeatherType] = useState<string>('');
	const [day, setDay] = useState<string>('');
	const [date, setDate] = useState<string>('');
	const [latitude, setLatitude] = useState<number | undefined>();
	const [longitude, setLongitude] = useState<number | undefined>();

	const updateResult = (data: any) => {
		if (!data) return;
		const date = moment().format('LL');
		const day = moment().format('dddd');
		const temp = `${Math.floor(data.main.temp)}`;
		const description = data.weather[0].main;
		setCityName(data.name);
		setWeatherType(description);
		setTemperature(temp);
		setDate(date);
		setDay(day);
	};

	useEffect(() => {
		if (city) {
			const fetchWeather = async (city: string) => {
				const weatherApiUrl = `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
				await fetch(weatherApiUrl)
					.then((res) => res.json())
					.then((result) => updateResult(result));
			};
			fetchWeather(city);
		} else {
			navigator.geolocation.getCurrentPosition((position) => {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);

				const fetchData = async () => {
					if (latitude && longitude) {
						const weatherApiUrl = `${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
						await fetch(weatherApiUrl)
							.then((res) => res.json())
							.then((result) => updateResult(result));
					}
				};
				fetchData();
			});
		}
	}, [city, latitude, longitude]);

	return (
		<WeatherDetailsWrapper>
			<MainDetail>
				<WeatherCard
					weatherType={weatherType}
					temperature={temperature}></WeatherCard>
				<CityDetail>
					<CityName>{cityName}</CityName>
					<Date>{date}</Date>
					<Date>{day}</Date>
				</CityDetail>
			</MainDetail>
			<FutureDetail>
				<WeatherCard
					weatherType={weatherType}
					temperature={temperature}></WeatherCard>
				<WeatherCard
					weatherType={weatherType}
					temperature={temperature}></WeatherCard>
				<WeatherCard
					weatherType={weatherType}
					temperature={temperature}></WeatherCard>
				<WeatherCard
					weatherType={weatherType}
					temperature={temperature}></WeatherCard>
			</FutureDetail>
		</WeatherDetailsWrapper>
	);
};
export default WeatherDetails;
