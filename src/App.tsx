import { useState, useEffect } from "react";
import "./App.css";
import { db } from './persistence/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface IGame {
  id: string;
  title: string;
}

const App = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const gamesCollectionRef = collection(db, "games");

  useEffect(() => {
    const getGames = async () => {
      const data = await getDocs(gamesCollectionRef);
      setGames(data.docs.map((doc) => ({ id: doc.id, title:doc.data().title })));
    }

    getGames();
  }, []);

  return (
    <div className="App">
      <button>create game</button>
      <h1>planning-poker</h1>
      {games.map((game) => {
        return (<div key={game.id}><h2>Title: {game.title}</h2></div>)
      })}
    </div>
  );
}

export default App;
