import React, { useEffect, useState } from 'react'
import './Nav.css'
// import { NavLink } from 'react-router-dom'
import { ReactComponent as Search } from '../assets/search2.svg'
import { ReactComponent as User } from '../assets/person-circle.svg'
import { ReactComponent as DarkMode } from '../assets/moon.svg'
import { selectisMobile } from '../features/isMobileSlice'
import { useSelector } from 'react-redux'
import IconMenu from '../assets/IconMenu'


export default function Nav() {

    const [navBackground, setNavBackground] = useState(false);
    const isMobile = useSelector(selectisMobile);

    const handleNavBackground = () => {
        if (window.scrollY > 100) {
            setNavBackground(true);
        }
        else {
            setNavBackground(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleNavBackground);
        return () => window.removeEventListener("scroll", handleNavBackground);
    }, [])

    return (
        <div className={`nav__main ${navBackground && "nav__color"}`}>
            <div className="routes">
                {
                    !isMobile &&
                    // <NavLink activeclassname="active" className='nav__link' to="/">
                        <p style={{color:"darkgray"}}>
                        Movie-Web
                        </p>
                    // </NavLink>
                }
                {
                    isMobile &&
                    <IconMenu width="30px" height="30px" fill="currentColor" />
                }
                <div className="input__wrapper">
                    {/* <svg width='30px' height='30px' > */}
                    <Search width='24px' height='24px' />
                    {/* </svg> */}
                    <input type='serach' className='search__input' placeholder='What do you want to watch?' />
                </div>

                {
                    !isMobile &&
                    <div className="routes__settings">
                        <div className="routes__settings__icons">
                            <User width='30px' height='30px' fill='currentColor' />
                        </div>
                        <div className="routes__settings__icons">
                            <DarkMode width='30px' height='30px' fill='currentColor' />
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}
