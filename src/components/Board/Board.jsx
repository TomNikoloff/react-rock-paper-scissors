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
        startGrid.classList.add('uk-hidden');

        let resultsGrid = document.getElementById('results_grid');
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
                setResult('You Won!')
                break
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                setResult('You Lost!')
                break
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                setResult('You Tied!')
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

    const handleRestart = () => {

        setUserChoice(null);
        setComputerChoice(null);
        setUserCard(null);
        setComputerCard(null);

        setCards(shuffleCards(ImagesArr));

        let startGrid = document.getElementById('start_grid');

        startGrid.classList.remove('uk-hidden');
        let resultsGrid = document.getElementById('results_grid');
        resultsGrid.classList.add('uk-hidden');
    }


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
                <Results 
                    result={result}
                    userCard={userCard}
                    computerCard={computerCard}
                    restart={handleRestart}
                />
            </div>
        </>
    )
}