import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import en from '../images/en.png';
import fr from '../images/fr.png';
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";


const Header = ({language, changeLanguage}) => {

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Webistic</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">
          <FormattedMessage id="home" />
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about">
          <FormattedMessage id="about" />
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/works">
          <FormattedMessage id="works" />
          </Link>
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto" onClick={changeLanguage}>
        {language === 'en' &&(<img alt="flag for french Language" src={fr} width="40" height="30" className="d-inline-block align-top" />)}
        {language === 'fr' &&(<img alt="flag for english Language" src={en} width="40" height="30" className="d-inline-block align-top " />)}
      </Nav>
    </Navbar>
  )
}

export default Header;
