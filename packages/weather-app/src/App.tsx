import React, { useState } from 'react';
import Navbar from 'src/components/navbar/Navbar';
import WeatherDetails from 'src/components/weather-details/WeatherDetails';
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

function App() {
	const [city, setCity] = useState<string>('');

	return (
		<div className='App'>
			<Container>
				<TopNavbar searchHandler={setCity} />
				<WeatherDetails city={city}></WeatherDetails>
			</Container>
		</div>
	);
}

export default App;
