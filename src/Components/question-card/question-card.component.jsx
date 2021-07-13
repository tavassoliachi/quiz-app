import React,{useState, useContext} from 'react'
import './question-card.styles.scss'
import Manage from '../../manage/manage.component';

function QuestionCard({question,answerC,answerI,index}) {

// console.log("rerender")
localStorage.setItem(index+'C',answerC)

    answerI.push(answerC);
    answerI.splice(4,1)
    answerI.sort((a, b) => 0.5 - Math.random());



function handleChange(event) {
  localStorage.setItem(index,event.target.value)
  }


  return(
    <div key={index} className={'question-card'}>

        <h1>{question}</h1>
        <form className='answers' onChange={(event) => handleChange(event)}> 
        <input name="answer" type='radio' id={index+'-'+'radio1'}  value={answerI[0]}/>
        <label for={index+'-'+'radio1'} className="1">{answerI[0]} </label> 
        <input name="answer" type='radio'id={index+'-'+'radio2'}  value={answerI[1]}/>
        <label for={index+'-'+'radio2'} className="2">{answerI[1]}</label>
        <input name="answer" type='radio' id={index+'-'+'radio3'}  value={answerI[2]}/>
        <label for={index+'-'+'radio3'} className="3" >{answerI[2]}</label>
       <input name="answer" type='radio' id={index+'-'+'radio4'}  value={answerI[3]}/>
        <label for={index+'-'+'radio4'} className="4" >{answerI[3]}</label> 
        </form>
    </div>
  )}

export default QuestionCard;