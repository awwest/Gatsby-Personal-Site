import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import li from "../images/li.png"
import al from "../images/al.png"
import gh from "../images/gh.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      position: `fixed`,
      top: 0,
      width: `100%`,
      // display: `flex`,
      // justifyContent: `space-between`
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            float: `left`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>Web Engineer</div>
      <div className="social-icons" style={{float:`right`}}>
        <a href="linkedin.com/in/alexwwest">
            <img
              src={li}
              alt="LinkedIn"
              style={{
              height: `1.5em`,
              width: `1.5em`,
              backgroundColor: `transparent`,
              color: `white`
            }}/>
        </a>
        <a href="github.com/awwest">
          <img
            src={gh}
            alt="Github"
            style={{
            height: `1.5em`,
            width: `1.5em`,
            backgroundColor: `transparent`,
            color: `white`
          }}/>
        </a>
        <a href="https://angel.co/alex-west">
          <img
              src={al}
              alt="AngelList"
              style={{
                height: `1.5em`,
                width: `1.5em`,
                backgroundColor: `transparent`,
                color: `white`
              }}/>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Alex West`,
}

export default Header
