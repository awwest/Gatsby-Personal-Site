import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import About from "../components/about";
import Experience from "../components/experience";
import Social from "../components/social";

import "../components/main.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <Experience />
    <section className="portfolio">
    </section>
    <Social />
  </Layout>
)

export default IndexPage
