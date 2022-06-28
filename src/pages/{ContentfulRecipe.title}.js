import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"

// Props is automatically passed to each page along with the title (recipe name)
const RecipeTemplate = ({ data }) => {
  console.log(props)
  return (
    <div>
      <h4> {props.params.title}</h4>
    </div>
  )
}

// graphql automatically uses the title prop which REQUIRED and ALWAYS unique
export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
