import { Badge, Col, Container, Row } from "react-bootstrap";

import Card from "react-bootstrap/Card";

import { BsStars } from "react-icons/bs";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

import { properties } from "../../data";
import "./properties.styles.css";

const Properties = ({
  priceValue,
  propertyType,
  locationValue,
  dateValue,
  searchQuery,
}) => {
  const handleSearchFilter = () => {
    let newArray = properties;
    if (priceValue) {
      if (priceValue === "all") {
        newArray = newArray;
      } else {
        newArray = newArray.filter((data) => data.price <= priceValue);
      }
    }

    if (propertyType) {
      if (propertyType === "all") {
        newArray = newArray;
      } else {
        newArray = newArray.filter((data) => data.type === propertyType);
      }
    }

    if (locationValue) {
      if (locationValue === "all") {
        newArray = newArray;
      } else {
        newArray = newArray.filter((data) => data.location === locationValue);
      }
    }

    if (dateValue) {
      if (dateValue === "all") {
        newArray = newArray;
      } else {
        newArray = newArray.filter((data) => data.date >= dateValue);
      }
    }

    if (searchQuery) {
      if (searchQuery === "") {
        newArray = newArray;
      } else {
        newArray = newArray.filter((data) =>
          data.name.toLowerCase().includes(searchQuery)
        );
      }
    }
    return newArray;
  };

  return (
    <>
      <Container
        style={{
          marginTop: "2rem",
        }}
      >
        <Row>
          {handleSearchFilter().map((property) => (
            <Col key={property.id}>
              <Card className="card">
                <Card.Img
                  className="image"
                  variant="top"
                  src={property.image}
                />
                <Card.Body>
                  {property.popular ? (
                    <Badge className="badge" bg="">
                      <BsStars /> POPULAR
                    </Badge>
                  ) : (
                    ""
                  )}
                  <Card.Text>
                    <span className="price">
                      ${property.price}
                      <span className="month">/month</span>
                      <span className="like">
                        {property.popular ? (
                          <AiTwotoneHeart className="like_icon" />
                        ) : (
                          <AiOutlineHeart className="like_icon" />
                        )}
                      </span>
                    </span>
                  </Card.Text>
                  <Card.Title className="title">{property.name}</Card.Title>
                  <Card.Text>{property.address}</Card.Text>
                  <hr />
                  <Card.Text>
                    <BiBed className="icon" /> {property.beds} Beds{" "}
                    <BiBath className="icon" /> {property.bathrooms} bathrooms{" "}
                    <BiArea className="icon" /> {property.area}
                    <sup>2</sup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Properties;
