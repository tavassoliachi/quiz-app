import React,{useState,useContext} from 'react'
import Manage from '../../manage/manage.component';
import './check-answers.styles.css'
function CheckAns(){
    
    const { gameState, setGameState } = useContext(Manage)
    return(<div className='submit'>
        <h1 id='loading'>Loading...</h1>
        <button onClick={()=>{setGameState('end')}}>SUBMIT</button>
    </div>
    
)
}

export default CheckAns;