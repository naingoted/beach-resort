import React, { Component } from 'react'
import {withRoomConsumer} from "../context";
import Loading from "./Loading";
import RoomsList from "./RoomsList";

function RoomsContainer ({context}) {
    const { loading, sortedRooms, rooms } = context;
    if(loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsList  rooms={rooms}/>
        </>
    )
}

export default withRoomConsumer(RoomsContainer);