import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

delete Wordpress2016.googleFonts

const overrideOptions = {
  bodyFontFamily: ["微軟正黑體"],
  headerFontFamily: ["微軟正黑體"],
  overrideThemeStyles() {
    return {
      "a.gatsby-resp-image-link": {
        boxShadow: `none`,
      },
      a: {
        color: "#199bd4",
        fontFamily: "微軟正黑體",
      },
      "h1,h2,h3,h4,h5,h6": {
        fontFamily: "微軟正黑體",
      },
    }
  },
}

const typography = new Typography({ ...Wordpress2016, ...overrideOptions })

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
