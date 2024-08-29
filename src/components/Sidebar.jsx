import React from 'react'
import './Sidebar.css'
// import { ReactComponent as Home } from '../assets/Home.svg'
import Home2 from '../assets/IconHome'
import { ReactComponent as TV } from '../assets/tv.svg'
import { ReactComponent as ExploreIcon } from '../assets/play.svg'
import { ReactComponent as About } from '../assets/help-circle.svg'
import { ReactComponent as Github } from '../assets/logo-github.svg'
import { NavLink } from 'react-router-dom'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__links">
        {/* <div className="links__icons"> */}
        <NavLink activeclassname="links__active1" className="links__icons" to="/">
          <Home2 width='24px' height='24px' fill='currentColor' />
        </NavLink>
        {/* </div> */}
        {/* <div className="links__icons"> */}
          <NavLink activeclassname="links__active1" className="links__icons" to="/explore">
            <ExploreIcon width='24px' height='24px' fill='currentColor' />
          </NavLink>
        {/* </div> */}
        <div className="links__icons">
          <TV width='24px' height='24px' fill='currentColor' />
        </div>
        <div className="sidebar__links__bottom">
          <div className="links__icons">
            <About width='24px' height='24px' fill='currentColor' />
          </div>
          <div className="links__icons">
            <Github width='24px' height='24px' fill='currentColor' />
          </div>
        </div>
      </div>
    </div>
  )
}
