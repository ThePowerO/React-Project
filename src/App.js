import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
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

