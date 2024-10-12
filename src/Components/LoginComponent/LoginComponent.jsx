import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './LoginComponent.css'
import { Link } from 'react-router-dom';
import SignupComponent from '../SignupComponent/SignupComponent';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';

function LoginComponent() {
    const [show, setShow] = useState(false);
    const [signup, setSignup] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const CloseLoginModal = () => setShow(false)

    const handleBtn = (name) => {
        if (name === "login") {
            setSignup(false)
        } if (name === "signup") {
            setSignup(true)
        }
    }
    return (
        <>
            <Button style={{ border: "none", backgroundColor: "transparent", color: "black" }} onClick={handleShow}>
                <i class="fa-regular fa-user fs-4"></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>
                        {/* <p className='fw-semibold'>Login</p> */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <div className="d-flex justify-content-center align-items-center" style={{ gap: "0px 20px" }}>
                            <button className='btn btn-dark w-100' style={{fontSize:"14px"}} onClick={() => { handleBtn("login") }}>Login</button>
                            <button className='btn btn-dark w-100' style={{fontSize:"14px"}} onClick={() => { handleBtn("signup") }}>Signup</button>
                        </div>
                        {
                            signup ? <SignupForm/> : <LoginForm />
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginComponent