import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../service/authService';

export default function Logout() {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        navigate(-1); // Navigate back to the previous page
    };

    const handleLogout = () => {
        // Clear authentication tokens or user data here
        authService.logout();
        // Redirect to login page
        navigate('/login');
    };

    return (
        <Modal show={show} onHide={handleClose} aria-labelledby="logout-modal-title" centered>
            <Modal.Header closeButton>
                <Modal.Title id="logout-modal-title">Are you sure you want to logout?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Si vous vous déconnectez, vous serez redirigé vers la page de connexion.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleLogout}>
                    Logout
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
