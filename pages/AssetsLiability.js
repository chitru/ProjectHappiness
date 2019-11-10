import React from "react";
import { Button, Form, Col } from 'react-bootstrap'

class AssetsLiability extends React.Component {
  state = {
    fields: [{
      asset: null,
      aamount: null,
      liability: null,
      lamount: null
    }]
  };

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
}

back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
}

  // handleChange(i, event) {
  //   let values = [...this.state.values];
  //   values[i].value = event.target.value;
  //   this.setState({ values });
  // }

  addClick() {
    this.setState((prevState) => ({
      fields: [...prevState.fields, {
        asset: null,
        aamount: null,
        liability: null,
        lamount: null
      }]
    }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }


  render() {
    let fields = this.state
    const { values } = this.props
    return (
      <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Assets</Form.Label>
            <Form.Control
              type="text"
              onChange={ this.props.handleChange('assetsCom') }
              defaultValue={values.assetsCom}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              onChange={ this.props.handleChange('aValue')}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
            type="text"
              onChange={ this.props.handleChange('assetsCom1') }
              defaultValue={values.assetsCom1}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              type="number"
              onChange={ this.props.handleChange('aValue1')}
              defaultValue={values.aValue1}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Liability</Form.Label>
          <Form.Control
            type="text"
            onChange={ this.props.handleChange('liabilityCom') }
            defaultValue={values.liabilityCom}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            onChange={ this.props.handleChange('lvalue') }
            defaultValue={values.lvalue}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
          <Form.Control
            type="text"
            onChange={ this.props.handleChange('liabilityCom1') }
            defaultValue={values.liabilityCom1}
            />
          </Form.Group>
          <Form.Group as={Col}>
          <Form.Control
            type="number"
            onChange={ this.props.handleChange('lvalue1') }
            defaultValue={values.lvalue1}
          />
          </Form.Group>
        </Form.Row>
            <Form.Row style={{ float: 'right', paddingTop: '20px' }}>
                    {/* <Button onClick={() => this.addClick()} style={{ marginRight: '20px' }}>ADD MORE</Button> */}
                    <Button onClick={this.back} style={{ marginRight: '20px' }}>BACK</Button>
                    <Button variant="primary" onClick={this.saveAndContinue}>NEXT</Button>
                </Form.Row>
      </Form>
      </div>
    );
  }
}

export default AssetsLiability