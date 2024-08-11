import React from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Numberselector'
import Roledice from './Roledice'
import { useState } from 'react'
import Rule from './Rule'
     
function Play() {

    const [score,setScore]=useState(0);
    const [slectednum,setSlecetdnum]=useState();
    const [currentdice, setCurrentdice] = useState(1);
    const [error,setError]=useState("");
    const[show,setShow]=useState(false);
    

 

  const randomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const rollDice = () => {
    if(!slectednum) {
        setError("You have not selected a number");
        
        return};
    const rand = randomnumber(1, 7);
    setCurrentdice(rand);

    if(slectednum===rand){
setScore((i)=>i+slectednum);
    }
    else{
setScore((i)=>i-2)
    }

    setSlecetdnum(undefined)
    setError(undefined)
    
};
    
const rest=()=>{
    setScore(0);
}


const toggle=()=>{
    setShow(j=>!j)
}



  return (
    <div>
     
<Totalscore  score={score}/>
<Numberselector  error={error} setSlecetdnum={setSlecetdnum} slectednum= {slectednum}/>
<Roledice  rollDice={rollDice}  currentdice={currentdice }/>



<div className='btn1'>
    <button onClick={rest}>
    Reset 
    </button>

      <button  onClick={()=>toggle()} >
        {
            show? "HideRules":"ShowRules"
        }
 
    </button>
</div>
    
{ show && <Rule/>}
    </div>
    
  )
  
}

export default Play
