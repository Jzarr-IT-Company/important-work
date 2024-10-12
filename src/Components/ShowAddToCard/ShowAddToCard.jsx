import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/logo.png'
function ShowAddToCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={{backgroundColor:"transparent", border:"none" ,color:"black"}} onClick={handleShow} className="me-2">
        <i class="fa-solid fa-cart-shopping fs-5 text-dark"></i>
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement='end' >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                <img src={logo} width={100} alt="" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="d-flex justify-content-center align-items-center">
            <h4>No Shoping</h4>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}

export default ShowAddToCard