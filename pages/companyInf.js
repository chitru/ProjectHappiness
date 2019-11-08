import React from 'react'
import '../styles/style.scss'
import { Col, Form, Button } from 'react-bootstrap'
import AssetsLiability from './AssetsLiability'
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'
// import { IconContext } from "react-icons"
class CompanyInf extends React.Component {
    // constructor() {
    //     super()
    //     this.state = { values: [{ value: null }] };
    //     this.handleChange = this.handleChange.bind(this)
    //     this.addClick = this.addClick.bind(this)
    //     this.removeClick = this.removeClick.bind(this)

    // }

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
                <Form.Row>
                    <Form.Group
                        as={Col}
                    >
                        <Form.Label>Company Name</Form.Label>
                            <Form.Control
                            type="text" 
                            onChange={this.props.handleChange('companyName')} 
                            defaultValue={values.companyName}
                            />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                    >
                        <Form.Label>ACN</Form.Label>
                        <Form.Control
                            type="text" 
                            onChange={this.props.handleChange('acn')} 
                            defaultValue={values.acn}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="">
                    <Form.Label>Company Address</Form.Label>
                    <Form.Control
                        type="text" 
                        onChange={this.props.handleChange('companyAddress')} 
                        defaultValue={values.companyAddress}
                    />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Loan Purpose</Form.Label>
                        <Form.Control
                            as="select" 
                            onChange={this.props.handleChange('companyAddress')} 
                            defaultValue={values.companyAddress}
                        >
                            <option></option>
                            <option>Refinance</option>
                            <option>Purchase</option>
                            <option>Debt Consolidation</option>
                            <option>Construction Finance</option>
                            <option>Bridging Finance</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Loan Amount</Form.Label>
                        <Form.Control
                            type="number" 
                            onChange={this.props.handleChange('companyAddress')} 
                            defaultValue={values.companyAddress}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Loan Term</Form.Label>
                        <Form.Control
                            type="number" 
                            onChange={this.props.handleChange('companyAddress')} 
                            defaultValue={values.companyAddress}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row style={{ float: 'right', paddingTop: '20px' }}>
                    <Button onClick={this.back} style={{ marginRight: '20px' }}>BACK</Button>
                    <Button variant="primary" onClick={this.saveAndContinue}>NEXT</Button>
                </Form.Row>
            </Form>
            </>
        )
    }
}

export default CompanyInf