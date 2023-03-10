import React, {useState} from 'react'
import Jitsi from 'react-jitsi'

const roomName = 'my-super-secret-meeting-123e4567-e89b-12d3-a456-426655440000'
const userFullName = 'Joseph Strawberry'


export const App = () => {
    const handleIframeLoad = (iframe) => {
        console.log(iframe._frame)
    };
    return (
        <>
            <h2>My First Meeting!</h2>
            <Jitsi roomName={roomName} displayName={userFullName} onAPILoad={handleIframeLoad}
            />
        </>
    )

}


export default App
