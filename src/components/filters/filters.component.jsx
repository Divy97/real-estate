import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Properties from "../properties/properties.component";

import "./filter.styles.css";
function Filters({ searchQuery }) {
  const [priceValue, setPriceValue] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [locationValue, setLocationValue] = useState("all");
  const [dateValue, setDateValue] = useState();

  const search = searchQuery.toLowerCase();

  return (
    <>
      <Container className="filter_container">
        <Row>
          <Col>
            <label>Location: </label> <br />
            <select
              className="filter_dropdown"
              value={locationValue}
              onChange={(e) => setLocationValue(e.target.value)}
            >
              <option value="all">All</option>
              <option value="mumbai">mumbai</option>
              <option value="pune">pune</option>
              <option value="ahmedabad">ahmedabad</option>
              <option value="kolkata">kolkata</option>
              <option value="surat">surat</option>
              <option value="bangalore">bangalore</option>
            </select>
          </Col>
          <Col>
            <label>When: </label> <br />
            <input
              type="date"
              style={{
                padding: "0 1rem",
              }}
              className="inputBox"
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
            />
          </Col>
          <Col>
            <label>Price: </label> <br />
            <select
              className="filter_dropdown"
              value={priceValue}
              onChange={(e) => setPriceValue(e.target.value)}
            >
              <option value="all">All</option>
              <option value="200">Less than 400</option>
              <option value="5000">Less than 5000</option>
              <option value="10000">Less than 10000</option>
            </select>
          </Col>
          <Col>
            <label>Property type: </label> <br />
            <select
              className="filter_dropdown"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="all">All</option>
              <option value="bungalows">Bungalows</option>
              <option value="tents">Tents</option>
              <option value="flats">Flats</option>
            </select>
          </Col>
        </Row>
      </Container>
      <Properties
        priceValue={priceValue}
        propertyType={propertyType}
        locationValue={locationValue}
        dateValue={dateValue}
        searchQuery={search}
      />
    </>
  );
}

export default Filters;
