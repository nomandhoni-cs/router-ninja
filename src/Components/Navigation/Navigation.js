import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap'
const Navigation = () => {
  const navigationStyle = {
    fontSize: '18px',
    fontWeight: '600'
  }
  return (
    <>
    <Nav className="justify-content-center" activeKey="/"  style={navigationStyle}>
        <Nav.Item>
            <LinkContainer to='/'>
          <Nav.Link>Home</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='about'>
          <Nav.Link>About</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='friends'>
          <Nav.Link>Friends</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to='friendList'>
          <Nav.Link>Friend List</Nav.Link>
            </LinkContainer>
        </Nav.Item>

      </Nav>
    </>
  )
}

export default Navigation