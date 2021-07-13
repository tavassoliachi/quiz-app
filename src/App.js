import React, { useState, useContext } from 'react';
import './App.css';
import MainMenu from './Components/MainMenu/main-menu.component';
import Quiz from './Components/Quiz/quiz.component';
import ResultsPage from './Components/results-page/results-page.component';
import Manage from './manage/manage.component';
function App() {
  const [gameState, setGameState] = useState("menu")

  return (
    <div className="App">
      <Manage.Provider value={{gameState,setGameState}}>
        {gameState === 'menu' && <MainMenu/>}
        {gameState === 'quiz' && <Quiz/>}
        {gameState === 'end' && <ResultsPage/>}
      </Manage.Provider>
    </div>
  );
}

export default App;
