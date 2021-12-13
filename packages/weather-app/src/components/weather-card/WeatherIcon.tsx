import Cloudy from 'src/assets/svg/Cloudy.svg';
import Rain from 'src/assets/svg/Rain.svg';
import Sunny from 'src/assets/svg/Sunny.svg';
import Thunderstorm from 'src/assets/svg/Thunderstorm.svg';
import Wind from 'src/assets/svg/Wind.svg';
import styled from 'styled-components';

const WeatherIconWrapper = styled.img`
	position: relative;
	z-index: 2;
`;

interface WeatherIconProps {
	weatherType: string;
}

export const WeatherIcon = ({ weatherType }: WeatherIconProps) => {
	switch (weatherType.toLowerCase()) {
		case 'clouds':
			return <WeatherIconWrapper src={Cloudy} alt='Cloud icon' />;
		case 'drizzle':
			return <WeatherIconWrapper src={Rain} alt='Cloud icon' />;
		case 'mist':
			return <WeatherIconWrapper src={Thunderstorm} alt='Cloud icon' />;
		case 'haze':
			return <WeatherIconWrapper src={Wind} alt='Cloud icon' />;
		default:
			return <WeatherIconWrapper src={Sunny} alt='Cloud icon' />;
	}
};
