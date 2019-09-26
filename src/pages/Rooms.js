import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Rooms from '../components/Rooms'

export default function RoomsPage(){

    return ( 
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Hero>

        <Rooms/>
        </>
    )
}