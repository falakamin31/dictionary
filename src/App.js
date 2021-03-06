/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Container } from '@material-ui/core';
import "./App.css";
import { Header } from './Components/Header';
import { Definitions } from './Components/Definitions';

const App = () => {
 
    const [word, setWord] = useState("")
    const [meanings, setMeanings] = useState([]);
    const [category, setCategory] = useState("en")




    const dictionaryApi= async() =>{
        try
        {
            const data = await axios.get(
        
                `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
            );
           setMeanings(data.data);
            
        }
    
    catch(error)
    {
        console.log(error);
    }
  };
  
  
  useEffect(() => {
    dictionaryApi();
  
    
  }, [word, category, dictionaryApi]);
  
    return (
      <div className= "main-container">
        <Container className="child-container" maxWidth="sm">
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
  
        {meanings &&
        <Definitions word={word} meanings={meanings} category ={category}/>}
  
        </Container>
       
        
        
      </div>
  )
}

export default App
