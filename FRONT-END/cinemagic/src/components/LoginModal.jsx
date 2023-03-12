/*react*/
import React, {useState} from "react";
/*react bootstrap*/
import {Button, Form, Modal} from "react-bootstrap";
/*apiConstants.js*/
import {LOGIN_URL} from "../data/apiConstants";

export default function LoginModal({onClose}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            email: email,
            password: password,
        }
        try {
            const response = await fetch(LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            /*TODO here is a console log*/
            console.log(data);
            onClose();
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <Modal show={true} onHide={onClose}>
             <Modal.Header>
                <Modal.Title>Login</Modal.Title>
                 <Button variant="link" className="close" onClick={onClose}>
                     <span aria-hidden="true">&times;</span>
                 </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                                      placeholder="Enter email"
                                      autoFocus value={email}
                                      onChange={event => setEmail(event.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                      value={password}
                                      onChange={event => setPassword(event.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="info" onClick={handleSubmit}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
