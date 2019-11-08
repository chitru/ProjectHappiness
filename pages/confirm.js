import React from 'react'
import { Button , Table, Form } from 'react-bootstrap'
class Confirm extends React.Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form handling is correct.");
    }
    render() {
        const { values: { firstName, lastName, email, phone, address, comment, companyName, acn, companyAddress, assetsCom, liabilityCom, assetsUp, liabilityUp, identification, personalInformation, compAddress, assetsSum} } = this.props
        return(
            <>
            <Table striped bordered hover size="sm" style={{ fontSize: '14px' }}>
            <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{address}</td>
                </tr>
                <tr>    
                    <td>Comment</td>
                    <td>{comment}</td>
                </tr>
                <tr>
                    <td>Company Name</td>
                    <td>{companyName}</td>
                </tr>
                <tr>
                    <td>ACN</td>
                    <td>{acn}</td>
                </tr>
                <tr>
                    <td>Company Address</td>
                    <td>{companyAddress}</td>
                </tr>
                <tr>
                    <td>Company Assets</td>
                    <td>{assetsCom}</td>
                </tr>
                <tr>
                    <td>Company Liablities</td>
                    <td>{liabilityCom}</td>
                </tr>
                <tr>
                    <td>Assets Uploaded</td>
                    <td>{assetsUp}</td>
                </tr>
                <tr>
                    <td>Liablities Uploades</td>
                    <td>{liabilityUp}</td>
                </tr>
                <tr>
                    <td>Identification</td>
                    <td>{identification}</td>
                </tr>
                <tr>
                    <td>Personal Information</td>
                    <td>{personalInformation}</td>
                </tr>
                <tr>
                    <td>Company Address</td>
                    <td>{compAddress}</td>
                </tr>
                <tr>
                    <td>Assets Summary</td>
                    <td>{assetsSum}</td>
                </tr>
            </tbody>
            </Table>
            <Form.Row style={{ float: 'right', paddingTop: '20px' }}>
                <Button onClick={this.back} style={{ marginRight: '20px' }}>BACK</Button>
                <Button variant="primary" onClick={this.handleSubmit}>SUBMIT</Button>
            </Form.Row>
            </>
        )
    }
}

export default Confirm