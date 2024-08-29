import React from 'react'
import './BottomBar.css'
import Home2 from '../assets/IconHome'
import { ReactComponent as ExploreIcon } from '../assets/play.svg'
import { ReactComponent as TV } from '../assets/tv.svg'
import { ReactComponent as About } from '../assets/help-circle.svg'
import { NavLink } from 'react-router-dom'


export default function BottomBar() {
    return (
        <div className='Bottom--main'>
            <div className="bottom--links">
                {/* <div className="bottom--icons"> */}
                    <NavLink activeclassname="bottom--icons--active" className="bottom--icons" to="/">
                        <Home2 width='24px' height='24px' fill='currentColor' />
                    </NavLink>
                {/* </div> */}
                {/* <div className="bottom--icons"> */}
                    <NavLink activeclassname="bottom--icons--active" className="bottom--icons" to="/explore">
                        <ExploreIcon width='24px' height='24px' fill='currentColor' />
                    </NavLink>
                {/* </div> */}
                <div className="bottom--icons">
                    <TV width='24px' height='24px' fill='currentColor' />
                </div>
                <div className="bottom--icons">
                    <About width='24px' height='24px' fill='currentColor' />
                </div>
                <div className="bottom--icons">
                    <ExploreIcon width='24px' height='24px' fill='currentColor' />
                </div>
            </div>
        </div>
    )
}
