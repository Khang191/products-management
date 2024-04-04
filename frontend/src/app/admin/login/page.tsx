'use client'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {
    return (
        <Form style={{
            width: "50%",
            margin: "24% auto",
            border: "1px solid #ccc",
            padding: "33px",
            borderRadius: "10px"
        }}>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="***" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Button variant="primary">Login</Button>
            </Form.Group>
        </Form>
    );
}