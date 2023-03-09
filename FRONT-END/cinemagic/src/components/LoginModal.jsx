import React, {useState} from "react";
import {Button, Form, Container, Modal} from "react-bootstrap";

export default function LoginModal({onClose}) {
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
                        <Form.Control type="email" placeholder="Enter email" autoFocus />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="info" onClick={onClose}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
