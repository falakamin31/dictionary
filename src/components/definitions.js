import React from 'react'
import "../styles/definitions.css";


const Definitions = ({word,category,meanings})  => {
    return (
        <div className="meanings">
          
        
            
            {word === "" ? (<span>Start by typing in Search bar</span> ):(
                
                

                meanings.map((mean ) => 
                mean.meanings.map((item) => 
                (item.definitions.map((def)=>console.log (item)))) 
                    
             )
            )}
        </div>
    )
}

export default Definitions
