import React,{useState,useContext} from 'react'
import Manage from '../../manage/manage.component';
import './results-page.styles.css'
function ResultsPage(){
    const { gameState, setGameState } = useContext(Manage)
    const currentScore=localStorage.getItem('score')
    myFunction();
return(
    <div className='results'>
    <h3>YOUR SCORE IS </h3>
    <h1>{currentScore} /  10</h1>
    <button onClick={()=>setGameState('menu')}>Main Menu</button>
    </div>
)
}
function myFunction(){
    let score=0;
    for(let s=0;s<10;s++){
    const correctAns = localStorage.getItem(s +'C')
    const selectedAns = localStorage.getItem(s)
    if(correctAns == selectedAns){
    score++;

    }}
    localStorage.setItem('score',score)
    }
export default ResultsPage;