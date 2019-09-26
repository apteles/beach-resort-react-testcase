import React,{useContext} from 'react'
import {Context as RoomsContext} from '../../context/rooms/roomsContext'


export function withRoomContext(Component){

    return (props) => {
        const {...data} = useContext(RoomsContext);
        return ( <Component {...props} context={data} />) 
    }      
}

