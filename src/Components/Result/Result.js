import React from 'react'
import './Result.css'
const Result = ({details}) => {
    
     return (
    <div className='result-container'>
         {
            
            details.map((e)=>{
                return (
                    
                    <div className='result-text'>
                        {/* (details.length>0)?{e}:null */}
                        {e}
                    </div>
                        
                

                )
               
            })
         }
    </div>
  )
}

export default Result