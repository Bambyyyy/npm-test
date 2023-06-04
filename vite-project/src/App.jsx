import './App.css'
import {test1, test2} from 'thisisanpmtest2byjesperflood';
import React from 'react';

function App() {
  const [print1, setPrint1] = React.useState();
  const [print2, setPrint2] = React.useState();

  function printText1 () {
    setPrint1(test1) 
  }

  function printText2 () {
    setPrint2(test2)
  }

  console.log(test1(),test2());


  return (
    <>
      <h1>NPM Test by Jesper Flood</h1>
      <h2>Extra h2 upplagd i appen</h2>
      <button onClick={printText1}>Click me!</button>
      <p>{print1}</p>
      <button onClick={printText2}>Click me next!</button>
      <p>{print2}</p>
    </>
  )
}

export default App
