import React from 'react'
import './Nav.css'
import { useEffect, useState } from 'react'

function Nav() {

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    }
  }, [])

  return (
    
    <div className={`nav ${show && "nav__black"}`}>

      <div className="nav__contents">

        <img className="nav__logo" src="images/netflix-logo-1.png" alt="netflix-img" />

        <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar-img" />

      </div>

    </div>
  )
}

export default Nav
