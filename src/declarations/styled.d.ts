import 'styled-components';

declare module 'styled-components' {
	export interface Fz {
		small2: number;
		small1: number;
		base: number;
		large1: number;
		large2: number;
		large3: number;
		large4: number;
		large5: number;
		large6: number;
		large7: number;
		large8: number;
	}

	export interface Breakpoints {
		tablet: number;
		desktop: number;
		desktopHd: number;
	}

	export interface DefaultTheme {
		primaryLightColor: string;
		primaryColor: string;
		primaryDarkColor: string;
		primaryBackgroundColor: string;
		primaryBgText: string;
		appBackgroundColor: string;
		linkColor: string;
		headingColor: string;
		textColor: string;
		textColorSecondary: string;
		fontFamilyBody: string;
		fontFamilyHeading: string;
		fontFamilyMono: string;
		fz: Fz;
		borderRadiusBase: number;
		borderColorBase: string;
		borderColorSplit: string;
		boxShadowBase: string;
		boxShadowElevationOne: string;
		boxShadowHover: string;
		boxShadowBottom: string;
		boxShadowFocus: string;
		boxShadowControlFocus: string;
		boxShadowNoneFocus: string;
		disabledColor: string;
		disabledBackgroundColor: string;
		gutter: number;
		controlHeightBase: number;
		transition: string;
		transitionControl: string;
		transitionBeizer: string;
		breakpoints: Breakpoints;
	}
}
