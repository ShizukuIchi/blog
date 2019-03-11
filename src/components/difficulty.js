import React from "react"

const getBackgroundColor = difficulty => {
  switch (difficulty) {
    case "入門":
      return "#4CAF50"
    case "初階":
      return "#8BC34A"
    case "中階":
      return "#FFB300"
    case "進階":
      return "#E53935"
    default:
      return "#1E88E5"
  }
}

const Difficulty = ({ difficulty }) => (
  <span
    style={{
      color: "#FFF",
      fontWeight: "700",
      fontSize: "12px",
      backgroundColor: getBackgroundColor(difficulty),
      padding: "1px 3px 2px",
      borderRadius: "3px",
      marginLeft: "10px",
    }}
  >
    {difficulty}
  </span>
)

export default Difficulty
