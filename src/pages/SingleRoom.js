import React, {useEffect,useContext, useState, useCallback} from 'react'
import {Link} from 'react-router-dom'

import {Context as RoomContext} from '../context/rooms/roomsContext'
import HeroStyled from '../components/HeroStyled'
import Banner from '../components/Banner'


export default function SingleRoom({match}){
   const [singleRoom, setRoom] = useState('')
   const {slug} = match.params
   const {getRoomBySlug} = useContext(RoomContext)

   useEffect(() => {
       const room = getRoomBySlug(slug)
       setRoom(room)
   },[slug]) // eslint-disable-line

   const capacityRoom = useCallback((capacity) => {
        if(capacity > 1){
            return `${capacity} people`
        }
        return `${capacity} person`
    },[])

   if(!singleRoom) {
       return (
           <div className="error">
               <h3>no such room could be found...</h3>
               <Link to="/rooms" className="btn-primary">
                   back to rooms
               </Link>  
           </div>
       )
   }

   const [mainImage, ...gallery] = singleRoom.images

   return (   
       <> 
            <HeroStyled image={mainImage}>
                <Banner title={`${singleRoom.name} room`}></Banner>    
            </HeroStyled>
            <section className="single-room">
                <div className="single-room-images">
                    {gallery.map((item, index) => (<img key={index} src={item} alt={singleRoom.name} />) )}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{singleRoom.description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${singleRoom.price}</h6>
                        <h6>size: {singleRoom.size} SQFT</h6>
                        <h6>max capacity: {capacityRoom(singleRoom.capacity)}</h6>
                        <h6>{singleRoom.pets ? 'pets allowed': 'no pets allowed'}</h6>
                        <h6>{singleRoom.breackfest && 'free breackfest included'}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                {singleRoom.extras.map( (item,index) => (<li key={index}> - {item}</li>))}
                </ul>
            </section>
        </>
   )
}