import { useEffect } from 'react';
import './App.css';

function App() {
useEffect(()=>{
  const getQuiz = async()=>{
    const res = await fetch('https://blockchain-quiz.deta.dev/',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${process.env.REACT_APP_USER}:${process.env.REACT_APP_PASSWORD}`)}`
      }
    })
    const data = await res.json()
    console.log(data);
  }
  getQuiz()
},[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
