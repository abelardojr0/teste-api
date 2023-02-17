import React from "react";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import { GlobalStyles } from "./GlobalStyles";
import "./App.css";
import axios from "axios";

function App() {
  const [jogos, setjogos] = React.useState([]);
  function clicou() {
    axios
      .get("http://localhost:5000/teste")
      .then((response) => {
        setjogos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // (async () => {
  //   const db = require("./Server/index");
  //   const jogos = await db.select("SELECT * FROM jogos");
  //   console.log(jogos);
  // })();
  return (
    <>
      <GlobalStyles />
      <Header />
      <Card />
      {jogos && jogos.map((jogo) => <p>{jogo[1]}</p>)}
      <button onClick={clicou}>Click teste</button>
    </>
  );
}

export default App;
