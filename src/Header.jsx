import React, {useState} from 'react';

export default function Header({ count }) {
    

    return (
        <div className="header-container">
            <p className="attempts">Attempts: {count}</p>
        </div>
    )
}