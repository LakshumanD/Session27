import "./App.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carts from "./carts";
import CartCount from "./CartCount";
import { useState } from "react";
import cartsource from "./cartssource";

function App() {
  const [products, setProducts] = useState(cartsource);
  const [cartItems, setCartItems] = useState([]);
  //console.log(products);

  const AddtoCart = (product) => {
    setProducts(
      products.map((x) =>
        x.id === product.id ? { ...product, flag: true } : x
      )
    );
    setCartItems([...cartItems, { ...product, flag: true }]);
  };
  const RemoveCart = (product) => {
    setProducts(
      products.map((x) =>
        x.id === product.id ? { ...product, flag: false } : x
      )
    );

    setCartItems(cartItems.filter((x) => x.id !== product.id));

    // setCartItems([...cartItems, { ...product, flag: true }]);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <NavDropdown title="Shop" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">App Products</NavDropdown.Item>
                <NavDropdown.Item href="/">Popular Items</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/">New Arrivals</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <CartCount count={cartItems.length} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="display">
        <h1>Shop in style</h1>
        <h6>With this shop hompeage template</h6>
      </div>
      <Carts AddtoCart={AddtoCart} data={products} RemoveCart={RemoveCart} />
    </>
  );
}

export default App;
