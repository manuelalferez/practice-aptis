import React, { Component } from "react";
import "./Grammar.css";
import data from "../../data/grammar";

class Grammar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: ""
    };
    this.clicked = this.clicked.bind(this);

  }

  clicked(e) {
/*       console.log(e.target.dataset.id) */
      console.log('Clicked')
  /*   this.setState({
      selection: key
    }); */
  }

  render() {
    let i = 0;
    return (
      <div className="Grammar">
        <h1 className="Grammar__question">{data[0].question}</h1>
        <div className="Grammar__options">
          {data[0].options.map(option => (
            <div className="Option">
              <input
                type="radio"
                name="check"
                data-id={i}
                value={i++}
                onClick={this.clicked()}
              />
              <p>{option}</p>
            </div>
          ))}
          {/*                 <div className="Option">
              <input type="checkbox" name="check" id="0" value="0" />
              <p>{data[0].options[0]}</p>
            </div>
            <div className="Option">
              <input type="checkbox" name="check" id="1" value="1" />
              <p>{data[0].options[1]}</p>
            </div>
            <div className="Option">
              <input type="checkbox" name="check" id="2" value="2" />
              <p>{data[0].options[2]}</p>
            </div> */}
        </div>
      </div>
    );
  }
}

export default Grammar;
