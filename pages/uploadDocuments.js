import React from 'react'
import '../styles/style.scss'
import { Col, Form, Button } from 'react-bootstrap'


class UploadDocuments extends React.Component {
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
                        <Form.Label>Assets</Form.Label>
                            <Form.Control
                            type="file"
                            onChange={this.props.handleChange('assetsUp')}
                            defaultValue={values.assetsUp}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group
                        as={Col}
                    >
                        <Form.Label>Liablities</Form.Label>
                            <Form.Control
                            type="file"
                            onChange={this.props.handleChange('liabilityUp')}
                            defaultValue={values.liabilityUp}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group
                        as={Col}
                    >
                        <Form.Label>Identification</Form.Label>
                            <Form.Control
                            type="file"
                            onChange={this.props.handleChange('identification')}
                            defaultValue={values.identification}
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

export default UploadDocuments