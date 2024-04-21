import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../css/home.css';
import logo from "./../logo.jpg";

function Home () {
    return (
        <Container id='background' fluid>
            <Navbar>
                <Container>
                <Navbar.Brand id ='brand'> <img src={logo} id="home-brand" alt="logo" />Musingo</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className='text-light'>
                    Signed in as: <a href="/login" className='text-light'>Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
      );
  };
  
export default Home;