import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./header.scss";
import NavbarToggle from "./NavbarToggle";
import CategoryItem from "./CategoryItem";
import Icon from "./Icon";
import NavbarExpand from "./NavbarExpand";
import CartExpand from "../CartExpand";
import SearchPanel from "../SearchPanel";
import { Link } from "react-router-dom";

function Header() {
  const category = ["Home", "About", "Products", "Contact"];
  const [showMenu, setShowMenu] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const [searchPanel, setSearchPanel] = React.useState(false);

  const handleClose = () => setShowMenu(false);
  const toggleShowMenu = () => setShowMenu((s) => !s);
  const handleCloseCart = () => setShowCart(false);
  const toggleShowCart = () => setShowCart((s) => !s);
  const toggleSearchPanel = () => {
    setSearchPanel((s) => !s);
  };

  return (
    <Navbar bg="light" expand="lg" className="justify-content-between py-3 position-relative">
      <Container fluid="md">
        <NavbarToggle show={showMenu} toggleShow={toggleShowMenu} />
        <Link to="/" className="navbar-brand">
          <div className="text-danger font-weight-bold">
            e<span className="text-dark">Commerce</span>
          </div>
        </Link>
        <CategoryItem category={category} className="d-md-none" />
        <Icon toggleShowCart={toggleShowCart} toggleSearchPanel={toggleSearchPanel} search={searchPanel} />
      </Container>

      <NavbarExpand show={showMenu} handleClose={handleClose} />
      <CartExpand show={showCart} handleClose={handleCloseCart} />
      <SearchPanel invisible={searchPanel} />
    </Navbar>
  );
}

export default Header;
