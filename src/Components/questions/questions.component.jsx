import react,{Component,useContext,useState} from 'react';
import QuestionCard from '../question-card/question-card.component';
import './questions.styles.css'

class Questions extends Component
{
  
  constructor(props)
  {
    super(props);

    this.state = {
    information:[],
    
  }
  }
  async componentDidMount()
  {
    const url = localStorage.getItem('url')
    console.log(localStorage.getItem('url'))
    const response = await fetch(url);
    const data = await response.json();
    this.setState({information:data.results})
    // console.log(data.results[1].incorrect_answers[0])
   
    document.getElementById('loading').innerHTML=' '
  }
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}
 
  render() {
    const {information} = this.state

    return(
      
    <div className='question-info'>

      {
        
      !!information.length && information.map((info,index) =>(
        
      <QuestionCard key={index} index={index} question={info.question} answerI={info.incorrect_answers} answerC={info.correct_answer} />
    
        ))
      }
      
    

    </div>
    )
  }
}

export default Questions;
