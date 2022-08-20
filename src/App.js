import { useEffect, useState } from 'react';
import Question from './componets/Question';
import Result from './componets/Result';
function App() {

  const [questions,setQuestions] = useState(null)
  const [result,setResult] = useState(null)
  const [mark,setMark] = useState(0)
  useEffect(() => {
    const getQuiz = async () => {
      const res = await fetch('https://blockchain-quiz.deta.dev/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${process.env.REACT_APP_USER}:${process.env.REACT_APP_PASSWORD}`)}`
        }
      })
      const data = await res.json()
      setQuestions(data)
    }
    getQuiz()
  }, [])
  const handers = async(e)=>{
    e.preventDefault()
    const formElem = document.querySelector('form')
    const formData = new FormData(formElem)
    const submited = []
    for (let [name,value] of formData) submited.push({q:parseInt(name),a:parseInt(value)})
    const answers = []
    for (let {answer,number} of questions) answers.push({q:number,a:parseInt(answer)})
    let results = []
    let mark = 0
    for(let i=0;i<submited.length;i++) {
      let correct = (submited[i]['a'] === answers[i]['a']) ? true:false;
      if (correct) mark += 10;
      results.push({question:i+1,correct})
    }
    setResult(results)
    setMark(mark)
    setTimeout(()=>{
      window.scrollTo(0,document.body.scrollHeight)
    },1000)
  }
  return (
    <div className='w3-panel'>
        {!questions && <div>Loading...</div>}
        {questions && (
          <>
          <h1>Blockchain quiz</h1>
          <form method='POST' onSubmit={handers} >
              {
                questions.map(question=><Question que={question} />)
              }
              <div className='w3-padding-top-24'>
              <input type="submit" value="submit" className='w3-button w3-blue'/>
              </div>
          </form>
          {result && (
            <>
              <h1>{mark}%</h1>
              <Result result={result} />
            </>
          )}
          </>
        )}
    </div>
  );
}

export default App;
