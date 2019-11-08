import React from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.scss'
class PersonalInf extends React.Component {
    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    render()  {
        const { values } = this.props;
        return(
            <>
            <Form style={{ width: '90%' }}>
                <Form.Row>
                    <Form.Group
                        as={Col}
                    >
                        <Form.Label>First Name</Form.Label>
                            <Form.Control
                            type="text" 
                            onChange={this.props.handleChange('firstName')} 
                            defaultValue={values.firstName}
                            />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                    >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text" 
                            onChange={this.props.handleChange('lastName')} 
                            defaultValue={values.lastName}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email" 
                        onChange={this.props.handleChange('email')} 
                        defaultValue={values.email}
                    />
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="number" 
                            onChange={this.props.handleChange('phone')} 
                            defaultValue={values.phone}
                        />
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text" 
                            onChange={this.props.handleChange('address')} 
                            defaultValue={values.address}
                        />
                </Form.Group>

                <Form.Row style={{ float: 'right', paddingTop: '20px' }}>
                        <Button variant="primary" onClick={this.saveAndContinue}>NEXT</Button>
                </Form.Row>
            </Form>
            </>
        )
    }
}

export default PersonalInf