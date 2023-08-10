import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

import api from "./services/api";

function App() {

  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    // 01001000/json/

    if (input === "") {
      alert("Provide with a CEP")
      return;
    }

  
  return (
    <div className="container">
        <h1 className="title">CEP Searcher</h1>
    
        <div className="containerInput">
            <input type="text" placeholder="Type your CEP"></input>

            <button className="buttonSearch">
                <FiSearch size={25} color="#fff"/>
            </button>

        </div>

        <main className="main">
            <h2>CEP: 79985884</h2>

            <span>Street: test</span>
            <span>complement: test</span>
            <span>Neighborhood: test</span>
            <span>City test - State</span>

        </main>
      </div>
  );
}

export default App;
