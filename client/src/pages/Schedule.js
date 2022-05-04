//  big timestamp jumbotron on top
//  ADD TASK BUTTON
//  MODAL TO EDIT/DELETE TASKS ON CLICK
//  SORT BY DATE AND START TIME

import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Row, Form, Button, Card, CardColumns, Modal } from 'react-bootstrap';

const Schedule = () => {

    return (
        <div>
            <Container>
                <Button> Add New Task </Button>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p>7 AM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>8 AM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>9 AM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>10 AM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>11 AM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>12 PM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>1 PM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>2 PM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>3 PM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>4 PM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>5 PM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>6 PM</p>
                    </Col>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default Schedule