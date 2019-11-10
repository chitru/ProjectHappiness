import '../styles/style.scss'
import Link from 'next/link'
import { Container, Row, Col, Nav, Navbar, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.scss'

import React from 'react'
class Home extends React.Component {
    render() {
        return (
            <>
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
                            <h1>Welcome to Launchcap.</h1>
                            <p>We simplify your access to capital and provide solutions you'll love to use.</p><br/>
                            <Link href="/applicationForm"><a>Submit Application Form</a></Link>
                            <div className="nextText">
                                <p><br/>
                                &copy; Launchcap 2019. All Rights Reserved
                                </p>
                            </div>

                </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Home;