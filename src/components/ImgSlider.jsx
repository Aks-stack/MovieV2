import React from 'react'
import Card from './Card'
import './ImgSlider.css'
import { ReactComponent as LeftArrow } from '../assets/left_arrow2.svg'
import { ReactComponent as RightArrow } from '../assets/right_arrow2.svg'
import { useRef } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectisMobile } from '../features/isMobileSlice'


export default function ImgSlider({ movie }) {

    const imgSliderRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hovered, setHovered] = useState(false);
    const isMobile = useSelector(selectisMobile);

    const handleNav = (scrollX) => {
        if (imgSliderRef.current) {
            imgSliderRef.current.scrollLeft = scrollX;
        }
    }

    const handleHover = (index) => {
        setHoveredIndex(index);
        setHovered(true);
    };

    // const handlePrev = (scrollX) => {
    //     if (imgSliderRef.current) {
    //         imgSliderRef.current.scrollLeft = scrollX;
    //     }
    // }

    return (
        <div className='imgSlider__nav'>
            <div className={`imgSlider__main ${ !isMobile && "imgSlider__margin"}`} ref={imgSliderRef}>
                {
                    movie?.map((movies) => {
                        return (
                            <div 
                            key={movies.id}
                            onMouseEnter={() => handleHover(movies.id)} onMouseLeave={() => { handleHover(-1); setHovered(false) }}
                            style={{filter: hovered ? hoveredIndex !== movies.id ? "grayscale(1)" : "none" : "none", transition: "0.4s ease-in-out"}}>
                            <Card title={movies.title} date={movies.release_date} image={movies.poster_path} />
                            </div>
                        )
                    })
                }
            </div>
            <button className={`imgSlider__leftArrow ${ !isMobile && "leftArrow__margin"}`} onClick={() => handleNav(imgSliderRef.current.scrollLeft - 350)}>
                <LeftArrow width='24px' height='24px' fill='currentColor' />
            </button>
            <button className='imgSlider__rightArrow' onClick={() => handleNav(imgSliderRef.current.scrollLeft + 350)}>
                <RightArrow width='24px' height='24px' fill='currentColor' />
            </button>
        </div>
    )
}
