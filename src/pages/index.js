import React from "react"
import Layout from "../components/Layout"
import RegisterBanner from "../components/RegisterBanner/RegisterBanner"
import landingStyles from "./index.module.scss"

export default function Home() {
  return (
    <Layout>
      <div className={landingStyles.landing}>
        <div className={landingStyles.landingOne}>
          <RegisterBanner />
        </div>
      </div>
    </Layout>
  )
}
