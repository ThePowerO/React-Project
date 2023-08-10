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

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
    }
    catch {
      alert("Something went wrong")
      setInput("")
    }

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

        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2>CEP: {cep.cep}</h2>

            <span>Street: {cep.logradouro}</span>
            <span>complement: {cep.complemento}</span>
            <span>Neighborhood: {cep.bairro}</span>
            <span>City: {cep.localidade} - {cep.uf}</span>

          </main>
        )}

      </div>
  );
}

export default App;
