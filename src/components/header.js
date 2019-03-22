import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import li from "../images/li.png";
import al from "../images/al.png";
import gh from "../images/gh.png";
import self from "../images/self3.png";


const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      position: `fixed`,
      top: 0,
      width: `100%`,
      zIndex: 5
    }}
  >
    <div
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        alignItems: `center`,
        padding: `0.5rem 1.0875rem`,
      }}
    >
    <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `flex`,
            alignItems: `center`
          }}
        >
      <img src={self} style={{
        height: `4rem`,
        marginRight: `15px`,
        borderRadius: `50%`,
        border: `1px solid black`
      }}/>
      <h1 style={{ margin: `10px`, minWidth: `11rem` }}>  
          {siteTitle}
      </h1>
      </Link>
      <div style={{
        position: `relative`,
        // left: `30%`,
        // marginTop: `6px`,
        fontSize: `1.2em`,
        color: `#fff`,
        fontWeight: `bold`
        // top: `12px`
      }}>Web Engineer</div>
      <div className="social-icons" style={{
        // float:`right`, 
        // marginTop: `-15px`
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        margin: `10px`
        }}>
        <a href="https://linkedin.com/in/alexwwest" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor:`white`,
            borderRadius: `50%`,
            padding: `10%`,
            position: `relative`,
            display: `inline-block`,
            height: `35px`,
            width: `35px`,
            // bottom: `5px`,
            marginRight: `15px`
          }}>
            <img
              src={li}
              alt="linkedin.com/in/alexwwest"
              style={{
              height: `22px`,
              // width: `1em`,
              backgroundColor: `transparent`,
              color: `white`,
              bottom: `7px`,
              right: `7px`,
              position: `relative`
            }}/>
        </a>
        <a href="https://github.com/awwest" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor:`white`,
            borderRadius: `50%`,
            padding: `10%`,
            position: `relative`,
            display: `inline-block`,
            height: `35px`,
            width: `35px`,
            marginRight: `15px`
          }}>
          <img
            src={gh}
            alt="github.com/awwest"
            style={{
            height: `1.5em`,
            width: `1.5em`,
            backgroundColor: `transparent`,
            color: `white`,
            bottom: `9px`,
            right: `9px`,
            position: `relative`
          }}/>
        </a>
        <a href="https://angel.co/alex-west" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor:`white`,
            borderRadius: `50%`,
            padding: `10%`,
            position: `relative`,
            display: `inline-block`,
            height: `35px`,
            width: `35px`
          }}>
          <img
              src={al}
              alt="angel.co/alex-west"
              style={{
                height: `1.5em`,
                // width: `1.5em`,
                backgroundColor: `transparent`,
                color: `white`,
                bottom: `8px`,
                right: `6px`,
                position: `relative`
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
