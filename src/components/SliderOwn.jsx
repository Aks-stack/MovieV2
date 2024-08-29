import React, { useEffect, useRef, useState } from 'react'
import './SliderOwn.css';
import { ReactComponent as LeftArrow } from '../assets/left_arrow2.svg'
import { ReactComponent as RightArrow } from '../assets/right_arrow2.svg'


export default function SliderOwn({ slide }) {

    const [index, setIndex] = useState(0);
    const thumbnailRef = useRef(null);
    const intervalRef = useRef(null);
    const animationClassName = 'text__animation';
    const imageLink = "https://image.tmdb.org/t/p/original";

    const handleAnimation = () => {
        const contentElements = document.querySelectorAll('.content > *'); // Select all children of .content
        contentElements.forEach(element => element.classList.add(animationClassName)); // Add animation class
        setTimeout(() => {
            contentElements.forEach(element => element.classList.remove(animationClassName)); // Remove animation class after a short delay
        }, 1500); // Adjust delay as needed for animation duration
    };
    
    // eslint-disable-next-line
    const handleNext = (scrollX) => {
        const isLast = index === slide.length - 1;
        if (isLast === false) {
            const newIndex = isLast ? 0 : index + 1;
            setIndex(newIndex);
            if (thumbnailRef.current) {
                thumbnailRef.current.scrollLeft = scrollX;
            }
            handleAnimation();
        }
    }


    const handlePrev = (scrollX) => {
        const isFirst = index === 0;
        if (isFirst === false) {
            const newIndex = isFirst ? slide.length - 1 : index - 1;
            setIndex(newIndex);
            if (thumbnailRef.current) {
                thumbnailRef.current.scrollLeft = scrollX;
            }
            handleAnimation();
        }
    }

    // useEffect(() => {
    //     intervalRef.current = setInterval(() => {
    //         handleNext(thumbnailRef.current.scrollLeft + 170);
    //     }, 10000);
    //     // Cleanup function to clear the interval on unmount
    //     return () => clearInterval(intervalRef.current);
    // }, [handleNext]);

    // const filteredData = slide.slice(1);
    // console.log(filteredData);

    return (
        <div className='slider'>
            <div className="navigation">
                <button className='left__arrow' onClick={() => handlePrev(thumbnailRef.current.scrollLeft - 170)}>
                    <LeftArrow width='24px' height='24px' fill='currentColor' />
                </button>
                <button className='right__arrow' onClick={() => handleNext(thumbnailRef.current.scrollLeft + 170)}>
                    <RightArrow width='24px' height='24px' fill='currentColor' />
                </button>
            </div>

            <div className="slide1" style={{ backgroundImage: `url(${imageLink}${slide[index]?.backdrop_path})` }}></div>

            <div className="content">
                <div className={`title ${animationClassName}`}>{slide[index]?.title}</div>
                <div className={`type ${animationClassName}`}>{slide[index]?.release_date.slice(0, 4)}</div>
                <div className={`description ${animationClassName}`}>
                    {slide[index]?.overview.slice(0, 250)}
                </div>
                <div className={`button ${animationClassName}`}>
                    <button>Watch Now</button>
                </div>
            </div>

            <div className="thumbnail" ref={thumbnailRef}>
                {
                    slide?.filter((arr, index) => index !== 0).map((movie) => {
                        return (
                            <div key={movie.id} className="item">
                                <img src={`${imageLink}${movie.backdrop_path}`} alt="/" />
                            </div>
                        )
                    })
                }
                <div className="item__dummy">
                </div>
                <div className="item__dummy">
                </div>
                <div className="item__dummy">
                </div>
                <div className="item__dummy">
                </div>
                <div className="item__dummy">
                </div>
            </div>

        </div>
    )
}
