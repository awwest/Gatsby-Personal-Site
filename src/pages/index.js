import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../components/main.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <section className="about">
      Full Stack Web Development and JavaScript Applications in San Francisco
      <p>This is about me section</p>
    </section>
    <section className="experience">
      Experience
    </section>
    <section className="portfolio">
      Projects
    </section>
    <section className="social">
      Social Links
    </section>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
