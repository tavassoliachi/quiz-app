import React,{useContext,useEffect, useState} from 'react'
import Manage from '../../manage/manage.component'
import './main-menu.styles.css'
import MainMenuData from '../../Data/main-menu-data/main-menu-data.component';
function MainMenu(){
  localStorage.clear();
    const { gameState, setGameState } = useContext(Manage)
    return(
    <div className="main-menu">
    <MainMenuData/>
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