import React,{useEffect} from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomContext as Rooms} from '../../Hoc/rooms/index'
import Loading from '../Loading'

function RoomsContainer({context}){
    const {state, sortedRoomsFilter, loadRooms} = context

    const {searchQuery} = state;



    useEffect(() => {
        loadRooms()
    },[loadRooms])

    return (
        <div>
            <RoomsFilter 
                rooms={state.rooms} 
                onFilter={sortedRoomsFilter}
                types={state.typesRooms}
                capacity={state.capacity}
                searchQuery={searchQuery}
            />
            {state.loading ? <Loading/> : <RoomsList rooms={state.sortedRooms} />}
        </div>
    )
}

export default Rooms(RoomsContainer);
