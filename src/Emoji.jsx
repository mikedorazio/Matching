import React, {useState} from "react";
import {edata, randomEmojies} from './emojiData';

export default function Emoji( { index, emojiData, handleClick } ) {

    //console.log("Emjoi.emojiData", emojiData);

    return (
        <div className={`emoji ${emojiData.status}`} emojiindex={emojiData.id} onClick={() => handleClick(index)}>
            <span emojiindex={emojiData.id}>{String.fromCodePoint(emojiData.code)}</span>
        </div>
    )
}

