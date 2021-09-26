/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import Header  from './components/Header';
import { Container } from '@material-ui/core';
import "./App.css";


const App = () => {

const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en")
  const dictionaryApi= async() =>{
      try
      {
          const data = await axios.get(
      
              `https://api.dictionaryapi.dev/api/v2/entries/en/plane`
          );
         setMeanings(data.data);
          
      }
  
  catch(error)
  {
      // console.log(error);
  }
};

useEffect(() => {
  dictionaryApi();

}, []);
return (

<div className= "main-container">
      <Container className="child-container" maxWidth="sm">

      <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
      </Container>
      
    </div>
  )
}

export default App
