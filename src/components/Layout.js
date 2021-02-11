import React from "react"
import layoutStyles from "./layout.module.scss"
import "../styles/index.scss"

function Layout({ children }) {
  return (
    <div>
      <header className={layoutStyles.header}>
        <div>
          <h1>
            Brand new free <h1>Online</h1> Social Security workshop
          </h1>
        </div>
      </header>
      {children}
    </div>
  )
}

export default Layout
