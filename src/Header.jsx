import React, {useState} from 'react';

export default function Header({ count, recordScore }) {
    
    return (
        <div className="header-container">
            <p className="record-score">Record Score: {recordScore} </p>
            <p className="attempts">Attempts: {count}</p>
        </div>
    )
}