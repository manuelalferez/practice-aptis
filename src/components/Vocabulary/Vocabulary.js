import React, { Component } from "react";
import "./Vocabulary.css";
import data from "../../data/vocabulary";
import happy_IMG from "../../images/happy.png";
import sad_IMG from "../../images/sad.png";

class Vocabulary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "0",
      exercise_id: Math.floor(Math.random() * data.length)
    };
    this.clicked = this.clicked.bind(this);
    this.correct = this.correct.bind(this);
    this.next = this.next.bind(this);
    this.random = this.random.bind(this);
    this.answer = this.answer.bind(this);
  }

  random() {
    let random_id = "";
    do {
      random_id = Math.floor(Math.random() * data.length);
    } while (random_id === this.state.exercise_id);
    console.log(`Random: ${random_id}`);
    return random_id;
  }

  clicked(e) {
    this.setState({
      selection: e.target.value
    });
  }

  correct() {
    let answer = document.getElementsByClassName("Answer")[0];
    answer.classList.remove("Hidden");
  }

  answer() {
    if (data[this.state.exercise_id].answer === this.state.selection) {
      return (
        <React.Fragment>
          <img src={happy_IMG} alt="Option is well" />
          <p>Correct</p>
        </React.Fragment>
      );
    } else {
      let pos_answer = data[this.state.exercise_id].answer;
      return (
        <React.Fragment>
          <img src={sad_IMG} alt="Option is incorrect" />
          <p>
            Answer:{" "}
            <span className="Answer__option">
              {data[this.state.exercise_id].options[pos_answer]}
            </span>
          </p>
        </React.Fragment>
      );
    }
  }

  next() {
    let random_exercise = this.random();
    this.setState({
      exercise_id: random_exercise,
      selection: "0"
    });

    // Reset selection
    document.getElementById("form").reset();

    let answer = document.getElementsByClassName("Answer")[0];
    answer.classList.add("Hidden");
  }

  render() {
    let i = 0;
    return (
      <div className="Vocabulary">
        <div className="Wrapper">
          <h1 className="Vocabulary__question">
            {data[this.state.exercise_id].question}
          </h1>
          <div className="Vocabulary__options">
            <form id="form">
              <select onChange={this.clicked}>
                {data[this.state.exercise_id].options.map(option => (
                  <option key={i} value={i++} className="Option">
                    {option}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
        <div className="Answer Hidden">{this.answer()}</div>
        <div className="Vocabulary__buttons">
          <button
            className="Button__correct Vocabulary__button"
            onClick={this.correct}
          >
            Correct
          </button>
          <button className="Vocabulary__button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Vocabulary;
