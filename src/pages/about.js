import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>About page</h1>
        <h1>hello world</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quae
          asperiores architecto iure. Doloremque, vel quia sint eum blanditiis
          impedit rem suscipit officia mollitia autem, voluptate eaque aperiam
          enim quis?
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: red;

  h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
