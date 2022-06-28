import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  // --- Alternative way to destructure ---
  // const {
  //   allContentfulRecipe: { nodes: recipes },
  // } = useStaticQuery(query)
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  // console.log(recipes)
  return (
    <section className="recipes-container">
      <h4>All Recipes</h4>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
