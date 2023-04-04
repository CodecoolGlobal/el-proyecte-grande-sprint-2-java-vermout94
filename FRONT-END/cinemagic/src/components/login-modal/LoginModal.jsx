/*react*/
import React, {useState} from "react";
/*react bootstrap*/
import {Button, Form, Modal} from "react-bootstrap";
/*apiConstants.js*/
import {LOGIN_URL} from "../../data/apiConstants";
/*SignUpModal.jsx*/
import {Buffer} from "buffer";
import {useNavigate} from "react-router-dom";

export default function LoginModal({onClose, setLoginStatus}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({email: '', password: ''});
    const navigate = useNavigate();
    const ENTER_KEY = 13;

    async function handleLogin() {
        const uri = LOGIN_URL;
        const authentication = Buffer.from(email + ":" + password).toString("base64");
        const headers = new Headers();
        headers.set("Authorization", "Basic " + authentication);

        if (!validate()) {
            return;
        }

        try {
            const response = await fetch(uri, {
                method: "POST", headers: headers,
            });
            /*todo maybe change this to 400 and up but only if edge cases happen*/
            if (response.status === 401) {
                alert("Wrong username or password");
                return;
            }
            const token = await response.text();
            localStorage.setItem('token', token);

            if (token) {
                setLoginStatus(true);
                navigate('/UserDashboard');
                onClose();
            } else {
                alert('Wrong username or password, try again!');
            }
        } catch (error) {
            console.error(error);
        }
    }

    function handleKeyDown(event) {
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            document.getElementById("login-button").click();
        }
    }

    function validate() {
        let isValid = true;
        let errors = {email: '', password: ''};

        if (!email.trim()) {
            isValid = false;
            errors.email = 'Email is required';
        }

        if (!password.trim()) {
            isValid = false;
            errors.password = 'Password is required';
        }

        setErrors(errors);
        return isValid;
    }

    return (<Modal centered show={true} onHide={onClose}>
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
                                  onChange={event => setEmail(event.target.value)}
                                  onKeyDown={handleKeyDown}
                                  isInvalid={!!errors.email}/>
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                  value={password}
                                  onChange={event => setPassword(event.target.value)}
                                  autoComplete="current-password"
                                  onKeyDown={handleKeyDown}
                                  isInvalid={!!errors.password}/>
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
                Close
            </Button>
            <Button variant="info" onClick={handleLogin} id="login-button">
                Login
            </Button>
        </Modal.Footer>
    </Modal>);
}
