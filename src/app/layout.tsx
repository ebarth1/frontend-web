"use client";
// src/app/layout.tsx
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Administration</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} href="/">Home</Nav.Link>
                <NavDropdown title="Food Planner" id="food-planner-dropdown">
                  <NavDropdown.Item as={Link} href="/foodPlanner/recipes">Recipes</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/foodPlanner/diet">Diet</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/foodPlanner/shopping-list">Shopping List</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
