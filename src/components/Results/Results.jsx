import React, {useState} from "react";

import "./Results.css";

export const Results = ({reset, text}) => {

    return (
        <>
            <div className="uk-flex uk-flex-center uk-flex-middle">
                <div className="uk-text-center">
                    <h2>
                        You Won!
                    </h2>
                    <div>
                        <div>
                            <button onClick={reset} type="button" className="uk-button control-btn">Play Again</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}