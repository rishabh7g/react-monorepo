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
		<div className='box mini-card'>
			<div className='box header'>
				<div className='box place-time'>
					<p className='city'>{miniCardProps.heading}</p>
					<p className='date'>{miniCardProps.subHeading}</p>
				</div>
			</div>
			<div className='box icon'></div>
			<div className='box content'>
				<p className='main'>{miniCardProps.content}</p>
				<p className='secondary'>{miniCardProps.subContent}</p>
			</div>
		</div>
	);
};

export { MiniCard };
