import './App.css';
import Header from './Components/Header/Header.js';
import Searchbox from './Components/Searchbox/Searchbox.js';
import { useState } from 'react';
import Result from './Components/Result/Result';

const name= require('@rstacruz/startup-name-generator');

function App() {
  // console.log(name(''));
    // var temp;  
  const [value, setvalue] = useState("expand")
  // const [temp, setTemp] = useState('')
  // let temp;
  const [e, sete] = useState("")
  const fun= (e)=>{

    // return 

    if(e.target.value){
        // console.log(e.target.value);
      sete(e.target.value)
        setvalue("contract");
        // temp=e;
    }
    else {setvalue("expand")
      sete('');
  }
    
  }
    // const [design, setdesign] = useState([])
  // console.log(temp);
  // console.log(e);
  return (
    <div className="App">
      <Header  change={value}/>
      <Searchbox  search={fun}/>
      {/* {e.length===1  && <Result details={name(e)} /> } */}
      {e !=="" &&<Result details={name(e)}  />}


    </div>
  );
}

export default App;
