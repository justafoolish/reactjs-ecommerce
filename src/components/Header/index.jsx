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
  const [navbarColor, setNavbarColor] = React.useState("bg-transparent");

  React.useEffect(() => {
    window.onscroll = function () {
      window.pageYOffset === 0 && setNavbarColor("bg-transparent");
      window.pageYOffset !== 0 && setNavbarColor("bg-white shadow");
    };
    return () => {
      window.onscroll = null;
    };
  });

  const handleClose = () => setShowMenu(false);
  const toggleShowMenu = () => setShowMenu((s) => !s);
  const handleCloseCart = () => setShowCart(false);
  const toggleShowCart = () => setShowCart((s) => !s);
  const toggleSearchPanel = () => {
    setSearchPanel((s) => !s);
    searchPanel && navbarColor === "bg-transparent" && setNavbarColor("bg-transparent");
    !searchPanel && navbarColor === "bg-transparent" && setNavbarColor("bg-white shadow");
  };

  return (
    <Navbar expand="lg" className={`justify-content-between py-3 fixed-top ${navbarColor}`}>
      <Container fluid="lg">
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
