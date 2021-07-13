import React,{useState,useContext} from 'react'
import Questions from '../questions/questions.component';
import './quiz.styles.css'
import CheckAns from '../check-answers/check-answers.component';
import Manage from '../../manage/manage.component';

function Quiz(){
    const { gameState, setGameState } = useContext(Manage)

    return(
    <div className='quiz'>
    <h1 className='quizTitle'>Quiz</h1>
    <Questions></Questions>
    <CheckAns/>
    </div>
)
}

export default Quiz;