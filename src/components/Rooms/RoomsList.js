import React from 'react'
import Room from '../Room'

export default function RoomsList({rooms}){
    return (
        <>
            {rooms.lenght === 0 ? 
            (<h3>unfortunately no rooms matched your search parameters</h3>) :
            (
                <section className="roomslist">
                    <div className="roomslist-center">
                        {rooms.map(item => {
                        return <Room key={item.id} room={item} />;
                        })}
                    </div>
                </section>
            )
            }
            
        </>
    )
}