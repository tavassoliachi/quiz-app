import React,{useContext,useEffect, useState} from 'react'
import Manage from '../../manage/manage.component'
import './main-menu.styles.css'
function MainMenu(){
  localStorage.clear();
    const { gameState, setGameState } = useContext(Manage)
    return(
    <div className="main-menu">
    <h1 className='title'>Main Menu</h1>
    <span>Choose Quiz Difficulty</span>
    <select id="difficulty" name="difficulty">
    <option value="easy">Easy</option>
    <option value="medium" selected>Medium</option>
    <option value="hard">Hard</option>
  </select>
  <span>Choose Quiz Category</span>
  <select id="category" name="category">
    <option value="20">Mythology</option>
    <option value="23">History</option>
    <option value="21" selected>Sports</option>
  </select>
    <button onClick={()=>{submit(setGameState)}}>Start Quiz</button>
    </div>
    )
}
function submit(setGameState)
{
 
    const difficulty=(document.getElementById("difficulty").value)
    const category1 = (document.getElementById("category").value)
  
    const url = `https://opentdb.com/api.php?amount=10&category=${category1}&difficulty=${difficulty}&type=multiple`
    localStorage.setItem('url', url);
    setGameState("quiz");
}
export default MainMenu;