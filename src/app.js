/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".org", ".io"];

  let randomDomain =
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] +
    extensions[Math.floor(Math.random() * extensions.length)];

  document.querySelector("#domain-name").innerHTML = randomDomain;
};
//  Irene perdón por el retraso, es que como necesitaba espacio en los codespaces, lo borre por error. 
//  Ahora borre el excuse generator que hicimos por segunda vez y por eso el proyecto tiene ese nombre. 
//  Y este lo hice rapido porque lo tenia copiado en el cuaderno. Gracias por la espera! 