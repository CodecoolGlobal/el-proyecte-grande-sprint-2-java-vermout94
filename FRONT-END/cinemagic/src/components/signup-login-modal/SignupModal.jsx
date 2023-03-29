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
    const [currentAppUser, setCurrentAppUser] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const ENTER_KEY = 13;

    /*   export function loginCurrentUser(AppUser) {
           setCurrentAppUser(AppUser.id);
           console.log(currentAppUser);
       }*/

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

    function validatePassword(password) {
        //const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?!.*\s).{8,}$/;
        const passwordPattern = /^(?=.*[A-Za-z].*[A-Za-z].*[A-Za-z])[A-Za-z0-9!@#$%^&*()_+}{"':;?/>.<,]*$/;
        return passwordPattern.test(password);
    }

    function handleKeyDown(event) {
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            document.getElementById("signup-button").click();
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

        // Validate password input
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
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
            setIsAuthenticated(true);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("Email already exists");
            } else {
                console.error(error);
            }
        }
    }

    return (
        <Modal centered show={true} onHide={onClose}>
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
                                      isInvalid={!!emailError}
                                      onKeyDown={handleKeyDown}/>
                        <Form.Control.Feedback type="invalid">
                            {emailError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Password"
                                      value={password}
                                      onChange={event => setPassword(event.target.value)}
                                      autoComplete="current-password"
                                      onKeyDown={handleKeyDown}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="info" onClick={handleSubmit} id="signup-button">
                    Signup
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
