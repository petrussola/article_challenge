import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { ROUTE_HOME, ROUTE_ARTICLE_LIST, ROUTE_AUTHOR_LIST } from '../../constants';

function MainNav() {
    return (
        <div className="MainNav">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={ Link } to={ ROUTE_HOME } className="mr-auto">Overloop Tech Test</Navbar.Brand>
                <Nav>
                    <Nav.Link as= { Link } to={ ROUTE_ARTICLE_LIST }>Articles</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as= { Link } to={ ROUTE_AUTHOR_LIST }>Authors</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default MainNav;
