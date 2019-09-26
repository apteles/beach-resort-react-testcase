import React, {useState} from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

const data = [
    {
        icon: <FaCocktail />,
        title: 'free cocktail',
        info: 'lorem ipsum dolor sit met consectur adipsinc  eltit. Magni, coporuis.'
    },
    {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'lorem ipsum dolor sit met consectur adipsinc  eltit. Magni, coporuis.'
    },
    {
        icon: <FaShuttleVan />,
        title: 'Free   shuttle',
        info: 'lorem ipsum dolor sit met consectur adipsinc  eltit. Magni, coporuis.'
    },
    {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info: 'lorem ipsum dolor sit met consectur adipsinc  eltit. Magni, coporuis.'
    }
]


export default function Services(){

    const [services] = useState(data)   
    
    return (
        <div className="services">
            <Title title="services"/>
            <div className="services-center">
            {services && services.map(({icon, title, info},index) => (
                <article key={index} className="service">
                    <span>{icon}</span>
                    <h6>{title}</h6>
                    <p>{info}</p>
                </article>
            ))}
            </div>
        </div>
    )
}