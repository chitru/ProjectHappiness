import React from 'react'
import '../styles/style.scss'
import { Form, Button } from 'react-bootstrap'


class Summary extends React.Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props
        return(
            <>
            <Form onSubmit={this.handleSubmit} style={{ width: '90%' }}>
                <Form.Group controlId="">
                    <Form.Label>Personal Information</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={this.props.handleChange('personalInformation')}
                        defaultValue={values.personalInformation}
                    />
                </Form.Group>
                <Form.Group controlId="">
                    <Form.Label>Company Address</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={this.props.handleChange('compAddress')}
                        defaultValue={values.compAddress}
                    />
                </Form.Group>
                <Form.Group controlId="">
                    <Form.Label>Assets</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={this.props.handleChange('assetsSum')}
                        defaultValue={values.assetsSum}
                    />
                </Form.Group>

                <Form.Row style={{ float: 'right', paddingTop: '20px' }}>
                    <Button onClick={this.back} style={{ marginRight: '20px' }}>BACK</Button>
                    <Button variant="primary" onClick={this.saveAndContinue}>NEXT</Button>
                </Form.Row>
            </Form>
            </>
        )
    }
}

export default Summary