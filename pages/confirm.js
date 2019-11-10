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
                <h2>Thank you for your submission. Your application is under process.</h2>
            </>
        )
    }
}

export default Confirm