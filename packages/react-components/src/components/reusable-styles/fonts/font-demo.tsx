import './font-demo.scss';

interface FontDemoProps {
	family: string;
	size: 'small' | 'medium' | 'large' | 'x-large';
	color?: string;
	label?: string;
}

const FontDemo = ({
	family,
	size,
	color = '#333',
	label = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt similique ad aliquid doloremque quia ducimus excepturi vel velit veritatis',
}: FontDemoProps) => (
	<div className='font-wrapper'>
		<p
			className='font-text'
			style={{ fontFamily: family, fontSize: size, color }}>
			{label}
		</p>
		<div className='font-detail'>
			<p className='item'>
				family: <span>{family}</span>
			</p>
			<p className='item'>
				size: <span>{size}</span>
			</p>
			<p className='item'>
				color: <span>{color}</span>
			</p>
		</div>
	</div>
);
export default FontDemo;
