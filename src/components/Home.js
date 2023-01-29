import { useState } from "react";
import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./AddBook";
import BooksList from "./BooksList";
import "./Home.css";

function Home() {

  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library Manage System</Navbar.Brand>
        </Container>
      </Navbar>

      <br />

      <Container style={{ width: "700px" }} className="c1">
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <br />
      <Container className="c2">
        <Row>
          <Col>
            <BooksList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
