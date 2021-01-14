import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Board() {
    const boardName = useLocation().pathname;
    return (
        <div>
            <h1>Hello this is Board.jsx</h1>
            <h3>{boardName}</h3>
        </div>
    )
}
