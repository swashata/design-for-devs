import { transparentize } from 'polished';
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	primaryLightColor: '#27AB83',
	primaryColor: '#199473',
	primaryDarkColor: '#147D64',
	primaryBackgroundColor: '#EFFCF6',
	primaryBgText: '#ffffff',
	appBackgroundColor: '#ffffff',
	linkColor: '#27AB83',
	headingColor: '#243B53',
	textColor: '#102A43',
	textColorSecondary: '#627D98',
	fontFamilyBody:
		"--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	fontFamilyHeading:
		"--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	fontFamilyMono:
		'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
	fz: {
		small2: 12,
		small1: 14,
		base: 16,
		large1: 18,
		large2: 20,
		large3: 24,
		large4: 30,
		large5: 36,
		large6: 48,
		large7: 60,
		large8: 72,
	},
	borderRadiusBase: 4,
	borderColorBase: '#9FB3C8',
	borderColorSplit: '#BCCCDC',
	boxShadowContent: `6px 6px 0 1px ${transparentize(0.5, '#9FB3C8')}`,
	boxShadowBase: `6px 6px 0 1px
	${transparentize(0.7, '#199473')}`,
	boxShadowHover: `8px 8px 0 1px
		${transparentize(0.7, '#199473')}`,
	boxShadowFocus: `4px 4px 0 1px
	${transparentize(0.7, '#199473')}`,
	disabledColor: '#BCCCDC',
	disabledBackgroundColor: 'hsl(216, 33%, 98%)',
	// should be half the maximum value you are going to use
	gutter: 20,
	controlHeightBase: 40,
	transition: '800ms ease-out',
	transitionControl: '200ms ease-out',
	transitionBeizer: '300ms cubic-bezier(0.755, 0.05, 0.855, 0.06)',
	breakpoints: {
		tablet: 600,
		desktop: 1024,
		desktopHd: 1200,
	},
};
