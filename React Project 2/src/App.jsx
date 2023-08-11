import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

import api from "./services/api";

function App() {

  const [input, setInput] = useState("");
  const [game, setGame] = useState({});

  async function handleSearch() {
    // 01001000/json/

    try {
      const response = await api.get(`${input}`);
      
      setInput("");
    }
    catch {
      setInput("")
    }

  } 
  

  return (

    <div className="container">
      <h1>Roblox Game Search</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Type the roblox game ID"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ></input>

        <button className="buttonSearch" onClick={handleSearch()}>
          <FiSearch size={25} color="#fff"></FiSearch>
        </button>


      </div>

      <main className="main">
        <h2>Roblox Game: Blox Fruit</h2>

        <span>Players Playing: 100500</span>
        <span>Game Group: Blox Fruits</span>
        <span>Likes: 3M+</span>
        <span>Favorites: 8M+</span>
      </main>

    </div>
  );

}

export default App;