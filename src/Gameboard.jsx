import React, {useState, useRef} from "react";
import {edata, randomEmojies} from './emojiData';
import Emoji from "./Emoji";

export default function Gameboard({ count, setCount, matches , setMatches}) {
    const [emojiData, setEmojiData] = useState([...randomEmojies]);
    const [previousCardState, setPreviousCardState] = useState(-1);
    const [isLocked, setIsLocked] = useState(false);
    const previousIndex = useRef(-1);
    //console.log("emojiData", emojiData);

    const matchCheck = (currentCard) => {
        // match
        if (emojiData[currentCard].id === emojiData[previousCardState].id) {
            emojiData[previousCardState].status = 'active matched';
            emojiData[currentCard].status = 'active matched';
            setPreviousCardState(-1);
            setMatches(prev => prev + 1);
            setIsLocked(false);
        } 
        // no match
        else {
            emojiData[currentCard].status = 'active';
            setEmojiData([...emojiData]);
            setTimeout(() => {
                setPreviousCardState(-1)
                emojiData[currentCard].status = 'unmatch'
                emojiData[previousCardState].status = 'unmatch'
                setEmojiData([...emojiData])
                setIsLocked(false);
            }, 750);
        }
    }

    const handleClick = (index) => {
        console.log("handleClick", index, emojiData[index], isLocked);
        if (isLocked) return;
        if (index !== previousIndex.current) {
            if (emojiData[index].status === 'active matched'){
                alert('already matched')
            }
            else {
                // first card turned over
                if (previousCardState === -1) {
                    console.log("previous card is -1")
                    previousIndex.current = index
                    emojiData[index].status = 'active'
                    setEmojiData([...emojiData])
                    setPreviousCardState(index)
                }
                // second card turned over...check if there is a match
                else {
                    setCount(prev => prev + 1);
                    setIsLocked(true);
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        } else {
            //alert('card currently seleted')
        }
    }

    return (
        <div className="gameboard-container">
            
            {randomEmojies.map((emoji, index) => {
                return <Emoji key={index} index={index} emojiData={emoji} handleClick={handleClick} />
            })}

        </div>
    );
}
