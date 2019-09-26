import React,{useContext, useEffect, useMemo} from 'react'
import {Context as RoomContext} from '../context/rooms/roomsContext'

import Title from '../components/Title'
import Loading from '../components/Loading'
import Room from '../components/Room'
export default function FeaturedRooms(){
    
    const {state, loadFeaturedRooms} = useContext(RoomContext)
    const {loading, featuredRooms} = state;

    useEffect(() => {
        loadFeaturedRooms()
    },[loading])  // eslint-disable-line

    const rooms = useMemo( () => (featuredRooms.map( room => ( <Room key={room.id} room={room} />))) ,[featuredRooms])

    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
            { loading ? <Loading /> : rooms }
            </div>
        </section>
    )
}