import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./header.scss";
import NavbarToggle from "./NavbarToggle";
import NavbarItems from "./NavbarItems";
import Icon from "./Icon";
import NavbarExpand from "./NavbarExpand";
import { SearchPanel, CartExpand } from "..";
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
      <Container fluid="lg" className="position-relative">
        <NavbarToggle show={showMenu} toggleShow={toggleShowMenu} />
        <Link to="/" className="navbar-brand">
          <div className="text-danger font-weight-bold">
            e<span className="text-dark">Commerce</span>
          </div>
        </Link>

        <NavbarItems category={category} className="mx-auto d-none d-lg-flex" />

        <Icon toggleShowCart={toggleShowCart} toggleSearchPanel={toggleSearchPanel} search={searchPanel} />

        <NavbarExpand show={showMenu} category={category} handleClose={handleClose} />
      </Container>

      <CartExpand show={showCart} handleClose={handleCloseCart} />
      <SearchPanel invisible={searchPanel} />
    </Navbar>
  );
}

export default Header;
