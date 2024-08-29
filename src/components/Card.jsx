import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className='card__Main'>
            <div className="card__content">
                <img
                    src={`https://image.tmdb.org/t/p/w185${props.image}`}
                    className='card__image'
                    alt=''
                />
                <div className="card__Title">{props.title}</div>
                <div className="card__Type">{props.date?.slice(0,4)}</div>
            </div>
        </div>
    )
}
