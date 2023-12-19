import axios from 'axios'
import './App.css';
import {useState,useEffect} from 'react'
function App() {
  const [advice,setAdvice]=useState("");
  const fetchAdvice=()=>
  {
    axios.get('https://api.adviceslip.com/advice').then((response)=>
    {
      setAdvice(response.data.slip.advice)
      console.log( response.data.slip.advice)
    }).catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>
  {
      fetchAdvice();
  },[])
  return (
    <div className="app">
       <div className="card">
        <div className="heading">
            <h1>{advice}</h1>
           
        </div>
        <button className="button" onClick={fetchAdvice}><span>Give Advice</span></button>
       </div>
    </div>
  );
}

export default App;
