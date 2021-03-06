import React, { useEffect } from 'react'

import Navbar from '../Components/Navbar'

// import package here
import { io } from 'socket.io-client'

// init variable here
let socket

export default function ChatClient() {

    const title = "Complain"
    document.title = 'DumbMerch | ' + title

    // code here
    useEffect(() => {
        socket = io('http://localhost:5000')

        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <>
            <Navbar title={title} />
        </>
    )
}