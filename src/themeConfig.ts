import { createMuiTheme } from "@material-ui/core/styles"
import { blue, pink, red } from "@material-ui/core/colors"

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue["A400"],
			light: blue["A200"],
			dark: blue["A700"],
		},
		secondary: {
			dark: pink["A400"],
			main: red["A400"],
			light: red["A200"],
		},
	},
})

export default theme
