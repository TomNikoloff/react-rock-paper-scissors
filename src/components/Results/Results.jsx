import React, {useState} from "react";

import "./Results.css";

export const Results = ({result, userCard, computerCard, restart}) => {

    return (
        <>
            <div id="results_grid" className="uk-grid uk-child-width-1-3 uk-hidden">
                <div className="uk-flex uk-flex-center uk-flex-middle uk-animation-slide-left-small">
                    <div className="card">
                        <img  className="card-img" src={userCard} />
                    </div>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle uk-animation-slide-bottom">
                    <div className="uk-text-center">
                        <h1 className="result-text">{result}</h1>
                        <button onClick={restart} type="button" className="uk-button control-btn">Play<br className="uk-hidden@s" /> Again</button>
                    </div>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle uk-animation-slide-right-small">
                    <div className="card">
                        <img  className="card-img" src={computerCard} />
                    </div>
                </div>
            </div>  
        </>
    )
}