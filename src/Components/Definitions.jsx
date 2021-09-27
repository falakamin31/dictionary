import React from 'react'
import "../Styles/Definitions.css";

export const Definitions = ({word,category,meanings}) => {
    return (
        <div className="meanings">
          
            
            {word === "" ? (<span>Start by typing in Search bar</span> ):(
                
                

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

