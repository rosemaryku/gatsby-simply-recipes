import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`
const FetchData = () => {
  const data = useStaticQuery(getData)
  console.log("DATA:", data)
  return (
    <div>
      <h1>Name: {data.site.siteMetadata.person.name}</h1>
    </div>
  )
}

export default FetchData
