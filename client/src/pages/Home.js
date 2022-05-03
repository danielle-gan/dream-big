// we're putting upcoming holidays on this page with Holiday API

import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
// import Auth from '../utils/auth';
// import { upcomingHolidays } from '../utils/API';
import { useMutation } from '@apollo/client';
// import { SAVE_TASK } from '../utils/mutations'


// sign in to view schedule?
const Home = () => {


return (

<div>
    <Container className="container home-container mt-3">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </Container>
</div>

)
}
export default Home