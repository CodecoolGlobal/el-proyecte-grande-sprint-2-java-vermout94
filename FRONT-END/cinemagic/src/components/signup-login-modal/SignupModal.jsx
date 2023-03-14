/*react*/
import React, {useState} from "react";
/*react bootstrap*/
import {Button, Form, Modal} from 'react-bootstrap';
/*apiConstants*/
import {SIGNUP_URL} from "../../data/apiConstants";

export default function SignupModal({onClose}) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(event) {
        const emailValue = event.target.value;
        setEmail(emailValue);

        // Regex pattern to validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        // Validate email input
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        const formData = {
            email: email,
            password: password,
        }
        try {
            const response = await fetch(SIGNUP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "Something went wrong");
                return;
            }

            onClose();
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("Email already exists");
            } else {
                console.error(error);
            }
        }
    }

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>Signup</Modal.Title>
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
                                      autoFocus
                                      value={email}
                                      onChange={handleEmailChange}
                                      isInvalid={!!emailError}/>
                        <Form.Control.Feedback type="invalid">
                            {emailError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Password"
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
                    Signup
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
