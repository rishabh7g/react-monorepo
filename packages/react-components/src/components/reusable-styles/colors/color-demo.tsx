import './color-demo.scss';
interface ColorDemoProps {
	backgroundColor: string;
	wallpaperColor?: string;
	label: string;
}
const ColorDemo = ({
	backgroundColor,
	wallpaperColor = '#fff',
	label,
}: ColorDemoProps) => (
	<div className='color-wrapper' style={{ backgroundColor: wallpaperColor }}>
		<div className='color-plot' style={{ backgroundColor }}></div>
		<p className='color-font' style={{ color: backgroundColor }}>
			Lorem ipsum dolor sit amet.
		</p>
		<p>
			Color: <span className='color-name'>{label}</span>
		</p>
	</div>
);
export default ColorDemo;
