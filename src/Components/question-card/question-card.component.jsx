import React,{useState, useContext} from 'react'
import './question-card.styles.scss'
import Manage from '../../manage/manage.component';

function QuestionCard({question,answerC,answerI,index}) {

// console.log("rerender")
    localStorage.setItem(index+'C',answerC)
    let answersArr = [...answerI]
    answersArr.push(answerC);
    answersArr.sort((a, b) =>0.5- Math.random());



function handleChange(event) {
  localStorage.setItem(index,event.target.value)
  }
  const id1 = index+'-'+'radio1'
  const id2 = index+'-'+'radio2'
  const id3 = index+'-'+'radio3'
  const id4 = index+'-'+'radio4'
  return(
    <div className={'question-card'}>

        <h1>{question}</h1>
        <form className='answers' onChange={(event) => handleChange(event)}> 
        <input name="answer" type='radio' id={id1}  value={answersArr[0]}/>
        <label for={id1} className="1">{answersArr[0]} </label> 
        <input name="answer" type='radio'id={id2}  value={answersArr[1]}/>
        <label for={id2} className="2">{answersArr[1]}</label>
        <input name="answer" type='radio' id={id3}  value={answersArr[2]}/>
        <label for={id3} className="3" >{answersArr[2]}</label>
       <input name="answer" type='radio' id={id4}  value={answersArr[3]}/>
        <label for={id4} className="4" >{answersArr[3]}</label> 
        </form>
    </div>
  )}

export default QuestionCard;