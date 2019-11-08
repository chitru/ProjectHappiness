import React from "react";
import { Button } from 'react-bootstrap'

class AssetsLiability extends React.Component {
  state = { values: [{ value: null }] };

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
}

back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
}

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i].value = event.target.value;
    this.setState({ values });
  }

  addClick() {
    this.setState(prevState => ({
      values: [...prevState.values, { value: null }]
    }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }


  render() {
    return (
      <div>
      <form>
        {this.state.values.map((el, i) => (
          <div key={i}>
            <input
              type="text"
              value={el.value || ""}
              onChange={e => this.handleChange(i, e)}
            />
            <input
              type="button"
              value="remove"
              onClick={() => this.removeClick(i)}
            />
          </div>
        ))}

        <input type="button" value="add more" onClick={() => this.addClick()} />
        <input type="submit" value="Submit" />
      </form>
      <Button onClick={this.back} style={{ marginRight: '20px' }}>BACK</Button>
      <Button variant="primary" onClick={this.saveAndContinue}>NEXT</Button>
      </div>
    );
  }
}

export default AssetsLiability
