import { useEffect, useState } from "react";
import { shuffleCardFn } from "./utils/utils";
import SingleCard from "./components/SingleCard";
import "./App.css";

//  {
//     src: '/img/sword-1.png',
//     matched: false,
//     id: 'pjja3up8o1'
//   }

const App = () => {
  const [cards, setCards] = useState(shuffleCardFn());
  const [turns, setTurns] = useState(0);
  const [clickOne, setClickOne] = useState(null);
  const [clickTwo, setClickTwo] = useState(null);

  const handleCardsShuffle = () => {
    setCards(() => shuffleCardFn());
    setTurns(0);
  };

  const handleCardClick = (card) => {
    console.log("clicked card", card);
    if (clickOne) {
      setClickTwo(card);
    } else {
      setClickOne(card);
    }
    // setClickOne(card);

    // clickOne ? setClickTwo(card) : setClickOne(card)
  };

  useEffect(() => {
    if (clickOne && clickTwo) {
    }
  }, [clickOne, clickTwo]);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={handleCardsShuffle}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              handleCardClick={handleCardClick}
              flipped={card === clickOne || card === clickTwo} // true
            />
          );
        })}
      </div>
      <p>Number of turns: {turns}</p>
    </div>
  );
};

export default App;
