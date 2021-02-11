import axios from "axios"
import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Modal from "../components/Modal/Modal"
import RegisterBanner from "../components/RegisterBanner/RegisterBanner"
import landingStyles from "./index.module.scss"

export default function Home() {
  //Modal
  const [modal, setModal] = useState(false)
  const selectModal = () => setModal(!modal)

  //Api Key//
  const webinarKey = process.env.WEBINAR_KEY

  useEffect(() => {
    axios
      .post(
        `https://api.webinarjam.com/webinarjam/webinar?api_key=${webinarKey}&webinar_id=45`
      )
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <Layout>
      <div className={landingStyles.landing}>
        <div className={landingStyles.landingOne}>
          <Modal modal={modal} closeModal={selectModal} />
          <RegisterBanner selectModal={selectModal} />
        </div>
      </div>
    </Layout>
  )
}
