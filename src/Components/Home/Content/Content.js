import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./Content.css";
export default function Content(props) {
  return (
    <Container id="grid-container">
      {props.news.map((item) => (
        <Card id="card">
          <CardImg top width="100%" src={item.image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {item.description}
            </CardSubtitle>
            <CardText>Kaynak: {item.source}</CardText>
            <Button href={item.url}>Yazının Devamını Oku...</Button>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
}
