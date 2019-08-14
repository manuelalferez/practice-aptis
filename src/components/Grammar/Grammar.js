import React, { Component } from "react";
import "./Grammar.css";
import data from "../../data/grammar";
import correct_IMG from '../../images/correct.png';

class Grammar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: null,
      exercise_id: Math.floor((Math.random() * data.length)),
      checked: [false, false, false]
    };
    this.clicked = this.clicked.bind(this);
    this.correct = this.correct.bind(this);
    this.next = this.next.bind(this);
    this.random = this.random.bind(this);
  }

  random(){
    let random_id='';
    do{
      random_id = Math.floor((Math.random() * data.length)) ;
    }while(random_id===this.state.exercise_id);
    console.log(`Random: ${random_id}`);
    return random_id;
  }

  clicked(e) {
    let new_checked = [false, false, false]; 
    new_checked[e.target.name] = true;
    this.setState({
      selection: e.target.value,
      checked: new_checked
    });
  }

  correct() {
    let img_HTML = document.getElementsByClassName('Option__correct')[data[this.state.exercise_id].answer];
    img_HTML.classList.remove('Hidden');
  }


  next() {
    let random_exercise = this.random()
    this.setState({
      exercise_id: random_exercise
    });

    // Deselect the checked box
    let checked_clear = [false, false, false]; 
    this.setState({
      checked: checked_clear
    });
    let img_HTML = document.getElementsByClassName('Option__correct');
    for(let i=0; i< img_HTML.length; i++){
      img_HTML[i].classList.add('Hidden');
    }
  }

  render() {
    let i = 0;
    return (
      <div className="Grammar">
        <h1 className="Grammar__question">{data[this.state.exercise_id].question}</h1>
        <div className="Grammar__options">
          {data[this.state.exercise_id].options.map(option => (
            <div className="Option" key={i}>
              <input
                type="radio"
                name={i}
                value={i}
                checked={this.state.checked[i++]}
                onChange={this.clicked}
                id='input'
              />
              <p>{option}</p>
              <img src={correct_IMG} alt='Option is well' className='Option__correct Hidden'/>
            </div>
          ))}
        </div>
        <div className='Grammar__buttons'>
          <button className='Button__correct Grammar__button' onClick={this.correct}>Correct</button>
          <button className='Grammar__button' onClick={this.next}>Next</button>
        </div>
      </div>
    );
  }
}

export default Grammar;
