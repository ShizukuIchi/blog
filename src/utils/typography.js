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
      ".gatsby-highlight-code-line": {
        backgroundColor: "#feb",
        display: "block",
        marginRight: "-1em",
        marginLeft: "-1em",
        paddingRight: "1em",
        paddingLeft: "0.75em",
        borderLeft: "0.25em solid #f99",
      },
      ".gatsby-highlight": {
        backgroundColor: "#fdf6e3",
        borderRadius: "0.4em",
        margin: "0.5em 0",
        overflow: "auto",
      },
      'gatsby-highlight pre[class*="language-"]': {
        backgroundColor: "transparent",
        margin: "0",
        padding: "0",
        overflow: "initial",
        float: "left",
        minWidth: "100%",
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
