import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Filters from "../filters/filters.component";

import "./search.styles.css";
const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar
        bg="transparent"
        expand="lg"
        style={{
          marginTop: "2rem",
        }}
      >
        <Container fluid>
          <h1 className="searchBox_heading">Search properties to rent</h1>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search a property name"
              className="me-2 searchBox_input"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
        </Container>
      </Navbar>
      <Filters searchQuery={searchQuery} />
    </>
  );
};

export default SearchBox;
