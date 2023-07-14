import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary" style={{background:"#ffff",height:'50px',position:'sticky',top:"0"}}>
        <Container className='nav-con'>
          <Navbar.Brand >Amenities Booking</Navbar.Brand>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;