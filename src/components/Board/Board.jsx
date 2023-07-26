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

    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [userCard, setUserCard] = useState(null);
    const [computerCard, setComputerCard] = useState(null)

    const handleCardClick = (choice) => {
        
        setUserChoice(choice);

        generateComputerChoice();

        
        let startGrid = document.getElementById('start_grid');
        console.log(startGrid);
        startGrid.classList.add('uk-hidden');

        let resultsGrid = document.getElementById('results_grid');
        console.log(resultsGrid);
        resultsGrid.classList.remove('uk-hidden');
        

    }

    const choices = ['rock', 'paper', 'scissors'];

    const generateComputerChoice = () => {

        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);

    }

    const evaluate = () => {

        switch( userChoice + computerChoice) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                setResult('You Win')
                break
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                setResult('You Lose')
                break
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                setResult('You Draw')
                break
        }

        cards.map((card, index) => {
            card.type == userChoice ? setUserCard(card.image) : '';
            card.type == computerChoice ? setComputerCard(card.image) : '';
        })

    }

    useEffect(() => {

        evaluate();
        
    }, [userChoice, computerChoice])


    return (
        <>
        {/*
            <Controls />
            */}
            <div className="board uk-padding-small uk-padding-remove-top uk-animation-slide-bottom">
                <div id="start_grid" className="uk-grid uk-child-width-1-3">
                    {cards.map((card, index) => {
                        return (

                            <Card 
                                key={index}
                                card={card}
                                index={index}
                                
                                onClick={() => handleCardClick(card.type)}
                            />
                        )
                    })}
                </div>  
                <div id="results_grid" className="uk-grid uk-child-width-1-3 uk-hidden">
                    <div className="uk-flex uk-flex-center uk-flex-middle uk-animation-slide-left">
                        <div className="card">
                            <img  className="card-img" src={userCard} />
                        </div>
                    </div>
                    <div className="uk-flex uk-flex-center uk-flex-middle">
                        <div>
                            <button>Play Again</button>
                        </div>
                    </div>
                    <div className="uk-flex uk-flex-center uk-flex-middle uk-animation-slide-right">
                        <div className="card">
                            <img  className="card-img" src={computerCard} />
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}