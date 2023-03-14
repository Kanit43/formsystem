import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const { user, roleUser } = useContext(AuthContext);
  if (!roleUser || !user) return "";
  else
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>E-form</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">หน้าแรก</Nav.Link>
          {roleUser.isOffice && (
            <>
              <Nav.Link>แบบฟอร์ม</Nav.Link>
              <Nav.Link>ประวัติทำรายการ</Nav.Link>
            </>
          )}
          {roleUser.isAdmin && (
            <>
              <Nav.Link>รายการผู้ใช้</Nav.Link>
            </>
          )}</Nav>
          <Nav>
            <Nav.Link>{user.email}</Nav.Link>
            <Nav.Link onClick={() => signOut(auth)}>ออกจากระบบ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default MenuBar;
