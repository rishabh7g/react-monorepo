import { MiniCard } from '@rishabh7g/react-components';
import moment from 'moment';
import { default as React } from 'react';
import './styles.scss';

const refresh = () => {
	window.location.reload();
};

const CardExampleCard = ({ weatherData }: any) => {
	const city = weatherData.name;
	const date = moment().format('LL');
	const temp = `${Math.ceil(weatherData.main.temp)} C`;
	const description = weatherData.weather[0].main;
	return (
		<MiniCard
			heading={city}
			subHeading={date}
			content={temp}
			subContent={description}
		/>
	);
};

export default CardExampleCard;
