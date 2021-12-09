import React from 'react';
import './MiniCard.scss';

interface MiniCardProps {
	heading: string;
	subHeading?: string;
	content: string;
	subContent?: string;
}

const MiniCard = (miniCardProps: MiniCardProps) => {
	return (
		<div className='mini-card'>
			<div className='header'>
				<div className='place-time'>
					<p className='city'>{miniCardProps.heading}</p>
					<p className='date'>{miniCardProps.subHeading}</p>
				</div>
			</div>
			<div className='icon'></div>
			<div className='content'>
				<p className='main'>{miniCardProps.content}</p>
				<p className='secondary'>{miniCardProps.subContent}</p>
			</div>
		</div>
	);
};

export { MiniCard };
