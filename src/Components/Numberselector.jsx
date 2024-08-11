import React, { useState } from 'react'

function Numberselector({ error,slectednum,setSlecetdnum}) {

    const arr=[1,2,3,4,5,6];
//   const [slectednum,setSlecetdnum]=useState()
  return (

    
    <div className="container1">
       <main >

       <p style={{color:'red'}}>{error}</p>
         <div className='box'>
         

    
    {
        arr.map((value,i )=>{
            return(
                <p className='numbers'
 
              isslect=  {value===slectednum}
              
                style={{
                    background : value === slectednum ? "red" : "white", 
                  }}

                
                onClick={()=>setSlecetdnum(value)}  key={i}> {value}</p>
            )
        })
    }

     
    </div>
    <p>Select the number </p>
    </main>

    </div>

  )
}

export default Numberselector
