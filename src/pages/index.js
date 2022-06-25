import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>Click Me</ExampleButton>
        <h1>home page</h1>
        <h1>hello works</h1>
        <h1>hello people</h1>
        <p className={text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
          explicabo illo ea doloribus distinctio pariatur quasi atque, eveniet
          cupiditate ab ullam accusantium in architecto, velit harum non aperiam
          quo asperiores. Ad vitae molestiae incidunt illo repudiandae iste,
          facere non deleniti ab numquam nostrum corrupti reprehenderit velit
          sequi est, et harum placeat. At optio dolores mollitia enim odit vel,
          dolore id! Eaque assumenda sint doloremque saepe. Sed repellendus
          omnis quo hic harum esse obcaecati cum neque praesentium consectetur
          voluptas dolores impedit recusandae sunt, repudiandae a laboriosam?
          Veritatis obcaecati aut saepe culpa.
        </p>
      </div>
    </Layout>
  )
}
