import React from "react"
import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a passionate and Motivated web developer{" "}
          <span role="img" aria-label="">
            🖥️
          </span>{" "}
          based in Nairobi Kenya. I Write code using Javascript, I use React the
          Javascript Library for Frontend and Express framework for the backend
          and I use MongoDB for Databases. I am currently a Back End Engineer at
          Adanian Labs{" "}
          <span role="img" aria-label="">
            😎️
          </span>{" "}
          . I am also an IT student at Zetech University. I am leading the
          Google Developers Student Clubs of Zetech and The web Club I organize
          meetups and lead in project building from start to production. I have
          also participated in university innovations.
          <span role="img" aria-label="">
            🚀️
          </span>{" "}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Experience</h2>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
