import '../styles/style.scss'
import Link from 'next/link'
import { Container, Row, Col, Nav, Navbar, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.scss'
import  { IoMdMore } from 'react-icons/io'

import React from 'react'
const styling = {
    backgroundImage: "url('/static/back2.jpg')",
    width:"100%",
    height:"100%"
  }
class Home extends React.Component {
    render() {
        return (
            <section className="mainWrap">
                <Container
                    nogutters="true"
                    fluid
                    style={{ padding: '0' }}
                >
                    {/* first section */}
                    <Row
                        nogutters="true"
                    >
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div
                                className="main"
                            >
                            <Image
                                src = "../static/main.jpg"
                                fluid
                            />
                            </div>
                            <div
                                className="logo"
                            >
                            <Link href="/index"><a>
                            <Image
                                src="../static/logov.png"
                                />
                            </a></Link>
                            </div>
                            <div
                                className="chat"
                            >
                            <Image
                                src="../static/chat.png"
                            />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Row>
                                <Col>
                                    <IoMdMore style={{ fontSize: '3rem', float: 'right', margin: '15px'}}/>
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', alignItems: 'center', height: '80vh'}}>
                                <Col>
                                    <h1>Welcome to<br/>Launchcap.</h1>
                                    <h2>Your <span class="lightText">fast, reliable</span> <br/> and <span class="lightText">personal</span> source of <br/>funds up to <span class="lightText">$10 <br/>million dollars</span></h2>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    {/* first section complete */}
                    {/* second section */}
                    <Row>
                        <div style={{ 
                                backgroundImage: "url('../static/back2.jpg')",
                                filter: 'grayscale(100%)',
                                width: '100%',
                                height: '100vh'
                            }}
                            className="sectionSecond"
                    >
                        <div className="textAim">
                            <div>
                            <p>Our aim is to help you grow. <br/>
                            It's that simple.</p>
                            <Link href="/applicationForm"><a><Button variant="light">GET STARTED</Button></a></Link>
                            </div>
                        </div>
                        </div>
                    </Row>
                    {/* second section complete */}
                    {/* third section */}
                    <Row nogutters="true" className="thirdSection">
                    <Col xs={12} sm={12} md={6} lg={6}>
                            <div
                                className="main"
                            >
                            <Image
                                src = "../static/back3.jpg"
                                fluid
                            />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Row style={{ display: 'flex', alignItems: 'center', height: '100vh', padding: '2.5rem'}}>
                                <Col>
                                    <h2>Get the money <br/>you need, pronto</h2>
                                    <p>As your partner in growth, we seek to <br/> understand your unique situation and <br/> create a solution tailored to to you. <br/>  Fill out 4 step application form <br/> and be conditionally approved for <br/> your loan within minutes.
                                     </p>
                                     <Link href="/applicationForm"><a><Button variant="light">APPLY NOW</Button></a></Link>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    {/* third section complete */}
                    {/* Fourth section */}
                    <Row nogutters="true" className="fourthSection">
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div
                                className="main"
                            >
                            <Image
                                src = "../static/back4.jpg"
                                fluid
                            />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Row style={{ display: 'flex', alignItems: 'center', height: '100vh', padding: '2.5rem'}}>
                                <Col>
                                    <h2>Why us?</h2>
                                    <p>It's pretty straight forward. Not only <br/> are we fast, reliable and personal, we<br/> are also invested in your growth.<br/><br/> We offer a personalised service that takes into account what you need today, as well as what you'll need in the future.<br/><br/>At Launchcap - we're on your team.
                                     </p>
                                     <Button variant="light">CONTACT NOW</Button>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    {/* fourth section complete */}
                </Container>
            </section>
        )
    }
}

export default Home;