import React from 'react'
import {withRoomConsumer} from "../context";
import Loading from "./Loading";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";

function RoomsContainer ({context}) {
    const { loading, sortedRooms, rooms } = context;
    if(loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList  rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomsContainer);