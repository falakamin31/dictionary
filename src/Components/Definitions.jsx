import React from 'react'
import "../Styles/Definitions.css";

export const Definitions = ({word,category,meanings}) => {
    return (
        <div className="meanings">
              {
                meanings[0] && word && category === "en" && (

                    <audio src = {meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{backgroundColor:"#fff" ,borderRadius:10}} 
                        controls
                        >

                        Your browser doesn't support audio element.
                    </audio>
                )
            }
          
            
            {word === "" ? (<span>Start by typing here</span> ):(
                
                

                meanings.map((mean ) => 
                mean.meanings.map((item) => 
                (item.definitions.map((def)=>
                (
                <div className="singleMean"
                    style={{backgroundColor: "white",color:"black"}} >
                 

                    <b>Definition: </b>{def.definition}
                    <hr style={{backgroundColor: "back",width:"100%"}}/>
                    {def.example &&
                    (
                        <span>
                            <b>Example: </b>{def.example}
                        </span>
                        
                    )}

                    {def.synonyms && (
                        <span>
                            <hr />
                            <b> Synonyms: </b> {def.synonyms.map((s) => `${s}, `)}
                               
                        </span>
                    )}
                    

                </div>)

                )))
                    
             )
            )}
        </div>
    )
}

