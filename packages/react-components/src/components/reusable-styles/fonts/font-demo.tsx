import './font-demo.scss';

interface FontDemoProps {
	family: string;
	color?: string;
	label?: string;
}

const FontDemo = ({
	family,
	color = '#333',
	label = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}: FontDemoProps) => {
	return (
		<div className='font-wrapper' style={{ fontFamily: family, color }}>
			<h1>{label}</h1>
			<h2>{label}</h2>
			<h3>{label}</h3>
			<h4>{label}</h4>
			<h5>{label}</h5>
			<h6>{label}</h6>
			<p className='font-text'>{label}</p>
		</div>
	);
};
export default FontDemo;
