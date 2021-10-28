import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col } from "reactstrap";
import Menu from "./MenuList/Menu";
import "./Home.css";
import Content from "./Content/Content";
import Header from "./Header/Header";
export default function Home() {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("tr");
  const [category, setCategory] = useState("general");

  const getNews = () => {
    axios({
      method: "GET",
      url: `https://api.collectapi.com/news/getNews?country=${country}&tag=${category}`,
      headers: {
        "content-type": "application/json",
        authorization: "apikey 6FketkkdASMLZ31r8mgLDy:5diqSQ6tfrchsySR4M0dm0",
      },
    }).then((ress) => setNews(ress.data.result));
  };
  useEffect(() => {
    getNews(country, category);
    return () => {};
  }, [category, country]);

  console.log(news);
  return (
    <Container>
      <Col id="header">
        <Header></Header>
      </Col>
      <div id="grid-container">
        <Col id="left-side" xs="4">
          <Menu
            changedCategory={setCategory}
            changedCountry={setCountry}
          ></Menu>
        </Col>
        <Col id="right-side" xs="8">
          <Col>
            <Content news={news}></Content>
          </Col>
        </Col>
      </div>
    </Container>
  );
}
