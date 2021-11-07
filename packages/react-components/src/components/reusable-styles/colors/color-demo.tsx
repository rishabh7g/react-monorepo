import './color-demo.scss';
interface RGBValue {
	r: number;
	g: number;
	b: number;
}
interface ColorDemoProps {
	rgbValue: RGBValue;
	wallpaperColor?: string;
}

const ColorDemo = ({
	rgbValue,
	wallpaperColor: backgroundColor = '#fff',
}: ColorDemoProps) => {
	const { r, g, b } = rgbValue;
	const primaryColor = `rgba(${r}, ${g}, ${b}, 1)`;
	const colorVariationA = `rgba(${r}, ${g}, ${b}, 0.9)`;
	const colorVariationB = `rgba(${r}, ${g}, ${b}, 0.75)`;
	const colorVariationC = `rgba(${r}, ${g}, ${b}, 0.5)`;
	const colorVariationD = `rgba(${r}, ${g}, ${b}, 0.25)`;
	const colorVariationE = `rgba(${r}, ${g}, ${b}, 0.1)`;
	return (
		<div className='color-wrapper' style={{ backgroundColor }}>
			<div className='color-detail-row'>
				<div
					className='color-plot'
					style={{ backgroundColor: primaryColor }}></div>
				<p className='color-font' style={{ color: primaryColor }}>
					Lorem ipsum dolor sit amet.
				</p>
				<p>
					<span className='color-name'>{primaryColor}</span>
				</p>
			</div>
			<div className='color-detail-row'>
				<div
					className='color-plot'
					style={{ backgroundColor: colorVariationA }}></div>
				<p className='color-font' style={{ color: colorVariationA }}>
					Lorem ipsum dolor sit amet.
				</p>
				<p>
					<span className='color-name'>{colorVariationA}</span>
				</p>
			</div>
			<div className='color-detail-row'>
				<div
					className='color-plot'
					style={{ backgroundColor: colorVariationB }}></div>
				<p className='color-font' style={{ color: colorVariationB }}>
					Lorem ipsum dolor sit amet.
				</p>
				<p>
					<span className='color-name'>{colorVariationB}</span>
				</p>
			</div>
			<div className='color-detail-row'>
				<div
					className='color-plot'
					style={{ backgroundColor: colorVariationC }}></div>
				<p className='color-font' style={{ color: colorVariationC }}>
					Lorem ipsum dolor sit amet.
				</p>
				<p>
					<span className='color-name'>{colorVariationC}</span>
				</p>
			</div>
			<div className='color-detail-row'>
				<div
					className='color-plot'
					style={{ backgroundColor: colorVariationD }}></div>
				<p className='color-font' style={{ color: colorVariationD }}>
					Lorem ipsum dolor sit amet.
				</p>
				<p>
					<span className='color-name'>{colorVariationD}</span>
				</p>
			</div>
			<div className='color-detail-row'>
				<div
					className='color-plot'
					style={{ backgroundColor: colorVariationE }}></div>
				<p className='color-font' style={{ color: colorVariationE }}>
					Lorem ipsum dolor sit amet.
				</p>
				<p>
					<span className='color-name'>{colorVariationE}</span>
				</p>
			</div>
		</div>
	);
};
export default ColorDemo;
