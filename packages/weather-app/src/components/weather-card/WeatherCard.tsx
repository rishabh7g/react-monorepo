import styled from 'styled-components';
import Cloudy from 'src/assets/svg/Cloudy.svg';
import Ellipse from 'src/assets/svg/Ellipse.svg';

const Card = styled.div`
	position: relative;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	height: 16.56rem;
	width: 13.5rem;
	border-radius: 4px;
	background: var(--color-others-blue);
`;

const WeatherIcon = styled.img`
	position: relative;
	z-index: 2;
`;

const BackgroundEllipse = styled.img`
	position: absolute;
	left: 0;
	bottom: -12px;
	z-index: 0;
`;

const WeatherSummary = styled.p`
	font-size: 2rem;
	margin: 0;
`;
const Temperature = styled.p`
	font-size: 1.5rem;
	margin: 0;
`;

const WeatherCard = () => {
	return (
		<Card>
			<div>
				<WeatherSummary>Rainy</WeatherSummary>
				<Temperature>25&deg; C</Temperature>
			</div>
			<div>
				<WeatherIcon src={Cloudy} alt='Cloud icon' />
				<BackgroundEllipse src={Ellipse} alt='Ellipse background' />
			</div>
		</Card>
	);
};

export default WeatherCard;
