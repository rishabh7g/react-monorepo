const size = {
	mobileS: '20em', //320px
	mobileM: '23.44em', //375px
	mobileL: '26.56em', //425px
	tablet: '48em', //768px
	laptop: '64em', //1024px
	laptopL: '90em', //1440px
	desktop: '118.75em', //1900px
	desktopL: '160em', //2560px
};

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktopL})`,
};
