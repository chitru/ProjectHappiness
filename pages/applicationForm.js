import React from 'react'
import '../styles/style.scss'
import PersonalInf from './personalInf'
import CompanyInf from './companyInf'
import UploadDocuments from './uploadDocuments'
import Summary from './summary'
import AssetsLiability from './AssetsLiability'
import Confirm from './confirm'
import { Container, Row, Col, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class ApplicationForm extends React.Component {
        state= {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            comment : '',
            companyName: '',
            acn: '',
            companyAddress: '',
            assetsCom: '',
            liabilityCom: '',
            assetsCom1: '',
            liabilityCom1: '',
            aValue: '',
            aValue1: '',
            lValue: '',
            lvalue: '',
            assetsUp: '',
            liabilityUp: '',
            identification: '',
            personalInformation: '',
            compAddress: '',
            assetsSum: '',
        }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        this.setState({[input]: event.target.value })
    }
    render()  {
        const { step } = this.state
        const { firstName, lastName, email, phone, address, comment, companyName, acn, companyAddress, assetsCom, liabilityCom, assetsUp, liabilityUp, identification, personalInformation, compAddress, assetsSum} = this.state
        const values = { firstName, lastName, email, phone, address, comment, companyName, acn, companyAddress, assetsCom, liabilityCom, assetsUp, liabilityUp, identification, personalInformation, compAddress, assetsSum}

        return(
            <>
            <div>
                <Container
                    nogutters="true"
                    fluid
                    style={{
                        padding: 0,
                    }}
                >
                    <Row
                        nogutters="true"
                    >
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <Image
                                src = "../static/back.png"
                                fluid
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8}>
                        <div className="formBody">
            {(() => {
                switch(step) {
                    case 1:
                        return (
                            <>
                            <p>Step 1 of 4</p>
                            <h1>Your Personal Information</h1>
                            <PersonalInf
                                nextStep={this.nextStep}
                                handleChange = {this.handleChange}
                                values={values}
                            />
                            {/* <Stepper/> */}
                            </>
                        )
                    case 2:
                        return(
                            <>
                          <p>Step 2 of 4</p>
                          <h1>Your Company Profile</h1>
                          <CompanyInf
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange = {this.handleChange}
                                values={values}
                            />
                            </>
                        )
                    case 3:
                        return(
                            <>
                            <p>Step 3 of 4</p>
                            <h1>Assets and Liability</h1>
                            <AssetsLiability
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange = {this.handleChange}
                                values={values}
                            />
                            </>
                        )
                    case 4:
                        return(
                            <>
                          <p>Step 3 of 4</p>
                          <h1>Upload Documents</h1>
                          <UploadDocuments
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange = {this.handleChange}
                                values={values}
                            />
                            </>
                        )
                    case 5:
                        return(
                            <>
                          <p>Step 4 of 4</p>
                          <h1>Summary</h1>
                          <Summary
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange = {this.handleChange}
                                values={values}
                            />
                            </>
                        )
                        case 6:
                            return(
                                <>
                              <p>Your Application form is complete.</p>
                              <h1>Please review before submitting.</h1>
                              <Confirm
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange = {this.handleChange}
                                    values={values}
                                />
                                </>
                            )
                    }
            })()}
                                    </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )

    }
}

export default ApplicationForm