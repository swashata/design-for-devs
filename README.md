# DESIGN FOR DEVELOPERS

Things to do always

### START WITH `modern-normalize`

```sh
yarn add modern-normalize
```

- Makes sure browser styles don't interfere.

### DESIGN THE BUTTON FIRST

Almost always we are going to need a button. While it may sound trivial, it
solves a lot of design decisions beforehand.

1. Color, background, font-size, basic look and feel.
2. Normal, Hover, Active and Focus states.
3. Differences between primary, secondary and any other sort of styles.

I ask myself such questions:

1. Do the button needs to be rounded?
2. How the animations would go?
3. The spacing inside and around the button.

What I come up while doing this, is what I call a design system.

### DEVELOP A DESIGN SYSTEM

It could be as simple as a set of CSS/JS variable or a finely tuned and
thought-out design files (Sketch, Figma etc.).

For now, let's just start with a set of variables. Things like
SCSS/LESS/styled-components help us better manage the variables. I make sure I
always have the following design variables defined.

```json
{
	"primaryLightColor": "#27AB83",
	"primaryColor": "#199473",
	"primaryDarkColor": "#147D64",
	"primaryBackgroundColor": "#EFFCF6",
	"primaryBgText": "#ffffff",
	"appBackgroundColor": "#ffffff",
	"linkColor": "#27AB83",
	"headingColor": "#243B53",
	"textColor": "#102A43",
	"textColorSecondary": "#627D98",
	"fontFamilyBody": "--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	"fontFamilyHeading": "--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	"fontFamilyMono": "\"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace",
	"fz": {
		"small2": 12,
		"small1": 14,
		"base": 16,
		"large1": 18,
		"large2": 20,
		"large3": 24,
		"large4": 30,
		"large5": 36,
		"large6": 48,
		"large7": 60,
		"large8": 72
	},
	"borderRadiusBase": 4,
	"borderColorBase": "#9FB3C8",
	"borderColorSplit": "#BCCCDC",
	"boxShadowBase": "0 2px 8px rgba(0, 0, 0, .15)",
	"boxShadowElevationOne": "0 1px 3px rgba(0, 0, 0, 0.01), 0 1px 2px rgba(0, 0, 0, 0.06)",
	"boxShadowHover": "0 3px 6px rgba(0,0,0,0.01), 0 3px 6px rgba(0,0,0,0.06)",
	"boxShadowBottom": "0 1px 3px rgba(0, 0, 0, 0.01), 0 1px 2px rgba(0, 0, 0, 0.06)",
	"boxShadowFocus": "0 0 0 2px rgba(39,171,131,0.5)",
	"boxShadowControlFocus": "0 0 0 3px rgba(39,171,131,0.2)",
	"boxShadowNoneFocus": "0 0 0 0 transparent",
	"disabledColor": "#BCCCDC",
	"disabledBackgroundColor": "hsl(216, 33%, 98%)",
	"gutter": 20,
	"controlHeightBase": 40,
	"transition": "300ms ease-out",
	"transitionControl": "200ms ease-out",
	"transitionBeizer": "300ms cubic-bezier(0.755, 0.05, 0.855, 0.06)",
	"breakpoints": {
		"tablet": 600,
		"desktop": 1024,
		"desktopHd": 1200
	}
}
```

For the stuff we design here, we use styled-components.

### GENERAL TIPS

- When in doubt, always go for more spacing.
- Design a separate feature first, instead of trying to design the whole app. If
  you don't need a navbar, don't design it yet.
- Iterate over design and code (if using a design software). You will better
  understand how realistic is your design w.r.t your current skill.
- It is perfectly okay to use CSS frameworks or components library, but don't
  restrict yourself.

### RESOURCES

#### PAID

- Refactoring UI - https://refactoringui.com/
- flaticon - https://www.flaticon.com/
- Shape.so - https://shape.so/

#### FREE

- Undraw - https://undraw.co/
- Drawkit- https://www.drawkit.io/
- Getwaves - https://getwaves.io/
- Piggment - https://piggment.co/

#### INSPIRATIONS

- https://www.awwwards.com/
- https://www.lapa.ninja/

## CONTRIBUTIONS

Let's make it a living directory of designing things we learn. You are most
welcome to edit the README and send a PR.
