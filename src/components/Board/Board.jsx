import { useEffect, useState, useRef } from "react";

import {Controls} from '../Controls/Controls';
import ImagesArr from "../Images";
import { Card } from "../Card/Card";
import { Results } from "../Results/Results";

const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
}

export default function Board(){

    const [cards, setCards] = useState(
        () => shuffleCards(ImagesArr)
    );

    const handleCardClick = (index) => {
        console.log('test click');
    }

    return (
        <>
        {/*
            <Controls />
            */}
            <div className="board uk-padding-small uk-padding-remove-top uk-animation-slide-bottom">
                <div id="" className="uk-grid uk-child-width-1-3">
                    {cards.map((card, index) => {
                        return (

                            <Card 
                                key={index}
                                card={card}
                                index={index}
                                
                                onClick={handleCardClick}
                            />
                        )
                    })}
                </div>  
            </div>
            
        </>
    )
}