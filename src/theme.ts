import { type DefaultTheme } from 'styled-components';

const breakpoints = ['1440px'];

export const space = [];
export const fontSizes = [];
// export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96];

declare module 'styled-components' {
	export interface DefaultTheme {
		space: number[];
		fontSizes: number[];
		breakpoints: string[];

		colors: {
			// TODO: When replacing the colors please remove the unused colors from below.

			// Old Colors
			blue_dark: '#142734';

			// Gradients
			gradient_blue: 'linear-gradient(52.84deg, #63BCF6 0%, #0295F6 100%)';

			// Primary
			primary_blue: '#0295F6';
			light_primary: '#67C5FF';
			dark_primary: '#0068C3';
			subtle_blue: '#E6F3FC';

			// Shades of Grey
			gray1: '#222222';
			gray2: '#4B5461';
			gray2b: '#637082';
			gray3: '#ACB5C2';
			gray4: '#DAE0E9';
			gray5: '#F1F4F8';
			gray6: '#FAFBFD';

			// Grayscale
			white: '#FFFFFF';
			gray50: '#FAFAFA';
			gray100: '#F5F5F5';
			gray200: '#EEEEEE';
			gray300: '#E0E0E0';
			gray400: '#BDBDBD';
			gray500: '#9E9E9E';
			gray600: '#757575';
			gray700: '#616161';
			gray800: '#424242';
			gray900: '#212121';
			black: '#000000';

			// Secondary
			secondary_red: '#D61414';
			secondary_yellow: '#FFA815';
			secondary_green: '#00CC55';

			// Other Graphic Colors
			dark_pink: '#EF476F';
			pulpy_orange: '#F18805';
			mint_green: '#44BBA4';
			bright_yellow: '#FFB400';
			light_purple: '#AB74F4';

			// Logo and Website
			web_blue: '#055CD8';
			web_purple: '#055CD8';
			web_light_blue: '#055CD8';
			web_light_purple: '#055CD8';
		};

		// Add other properties as required
	}
}

export const theme: DefaultTheme = {
	space,
	fontSizes,
	breakpoints,
	colors: {
		// TODO: When replacing the colors please remove the unused colors from below.

		// Old Colors
		blue_dark: '#142734',

		// Gradients
		gradient_blue: 'linear-gradient(52.84deg, #63BCF6 0%, #0295F6 100%)',

		// Primary
		primary_blue: '#0295F6',
		light_primary: '#67C5FF',
		dark_primary: '#0068C3',
		subtle_blue: '#E6F3FC',

		// Shades of Gray
		gray1: '#222222',
		gray2: '#4B5461',
		gray2b: '#637082',
		gray3: '#ACB5C2',
		gray4: '#DAE0E9',
		gray5: '#F1F4F8',
		gray6: '#FAFBFD',

		// Grayscale
		white: '#FFFFFF',
		gray50: '#FAFAFA',
		gray100: '#F5F5F5',
		gray200: '#EEEEEE',
		gray300: '#E0E0E0',
		gray400: '#BDBDBD',
		gray500: '#9E9E9E',
		gray600: '#757575',
		gray700: '#616161',
		gray800: '#424242',
		gray900: '#212121',
		black: '#000000',

		// Secondary
		secondary_red: '#D61414',
		secondary_yellow: '#FFA815',
		secondary_green: '#00CC55',

		// Other Graphic Colors
		dark_pink: '#EF476F',
		pulpy_orange: '#F18805',
		mint_green: '#44BBA4',
		bright_yellow: '#FFB400',
		light_purple: '#AB74F4',

		// Logo and Website
		web_blue: '#055CD8',
		web_purple: '#055CD8',
		web_light_blue: '#055CD8',
		web_light_purple: '#055CD8',
	},
};
