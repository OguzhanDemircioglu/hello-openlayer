import Navbar from "react-bootstrap/Navbar";
import React from "react";
import {Container, Nav, NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../App.css";
import {faVirusCovid} from "@fortawesome/free-solid-svg-icons/faVirusCovid";

export default function HorizontalMenu() {
    return (
        <div className="horizontalMenu">
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/"
                                  style={{color: "gold"
                                      ,marginLeft:"30px",marginRight:"80px"}}>
                        <FontAwesomeIcon icon={faVirusCovid} style={{marginRight:"5px"}}/>
                        Openlayer
                    </Navbar.Brand>
                    <Nav style={{flex: "max-content" }}>
                        <NavLink className="nav-link" href="/DrawByFreeHand">
                            DrawByFreeHand
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};
