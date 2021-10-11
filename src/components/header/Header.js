import {
  Container,
  Nav,
  Navbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import ModalAddMovie from "../ModalAddMovie";
import StarRating from "../StarRating";

const Header = ({ onAdd, setsearchtitle, setrating, rating }) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">React Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Movies">Movies</Nav.Link>
            <Nav.Link href="#Add-Movie">
              <ModalAddMovie onAdd={onAdd} />
            </Nav.Link>
            <Nav.Link href="#Search">
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text>Search Title</InputGroup.Text>
                <FormControl
                  placeholder="search by title..."
                  onChange={(e) => setsearchtitle(e.target.value)}
                />
              </InputGroup>
            </Nav.Link>
            <Nav.Link href="#Rating">
              <StarRating setrating={setrating} rating={rating} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
