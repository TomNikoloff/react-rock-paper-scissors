import React, {useState} from "react";

import "./Card.css";

export const Card = ({onClick, card, index}) => {

    return (
        <>
            <div className="uk-flex uk-flex-center uk-flex-middle">
                <div className="card" onClick={onClick}>
                    <img id={index} className="card-img" src={card.image} />
                </div>
            </div>
        </>
    )
}