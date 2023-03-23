/*react*/
import React, {useState} from "react";
/*react bootstrap*/
import {Button, Form, Modal} from "react-bootstrap";
/*apiConstants.js*/
import {LOGIN_URL} from "../../data/apiConstants";
/*SignUpModal.jsx*/
import {Buffer} from "buffer";
import {useNavigate} from "react-router-dom";

export default function LoginModal({onClose, onSuccessfulLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function handleLogin() {
        event.preventDefault();
        const uri = LOGIN_URL;
        const authentication = Buffer.from(email + ":" + password).toString("base64");
        const headers = new Headers();
        headers.set("Authorization", "Basic " + authentication);
        try {
            const response = await fetch(uri, {
                method: "POST",
                headers: headers,
            });
            const token = await response.text();
            localStorage.setItem('token', token);

            if (token) {
                navigate('/UserDashboard');
                console.log
                onClose();
            } else {
                alert('Wrong username or password, try again!');
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <Modal centered show={true} onHide={onClose}>
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
                                      onChange={event => setPassword(event.target.value)}
                                      autoComplete="current-password"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="info" onClick={handleLogin}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
