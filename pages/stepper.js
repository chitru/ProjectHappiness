import React from 'react'
import '../styles/style.scss'
import { Col, Form, Button } from 'react-bootstrap'

class Stepper extends React.Component {
    render() {
        return (
            <div id="stepper">
                <ul id="progressbar">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default Stepper;