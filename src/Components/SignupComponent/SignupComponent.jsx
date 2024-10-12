import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
function SignupComponent() {
    const [show, setShow] = useState(false);

    const handleCloseSignup = () => setShow(false);
    const handleShowSignup = () => {
        setShow(true)

    };

    return (
        <>
            <Link onClick={handleShowSignup}>
                Signup
            </Link>

            <Modal show={show} onHide={handleCloseSignup}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSignup}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseSignup}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SignupComponent