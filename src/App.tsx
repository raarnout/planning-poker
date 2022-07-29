import { useState, useEffect } from "react";
import "./App.css";
import { db } from './persistence/firebase';
import { collection, getDocs } from 'firebase/firestore';

const App = () => {
  const [games, setGames] = useState<{id: string, title: string;}[]>([]);
  const gamesCollectionRef = collection(db, "games");

  useEffect(() => {
    const getGames = async () => {
      const data = await getDocs(gamesCollectionRef);
      console.log(data);
      console.log(data.docs)
      setGames(data.docs.map((doc) => ({ title: doc.data().title, id: doc.id })));
    }

    getGames();
  }, []);

  return (
    <div className="App">
      <h1>planning-poker</h1>
      {games.map((game) => {
        return (<div><h2>Title: {game.title}</h2></div>)
      })}
    </div>
  );
}

export default App;
