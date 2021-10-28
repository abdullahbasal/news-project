import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./Menu.css";
import Logo from "../../../Assets/Logo.png";
export default function Menu(props) {
  function changeDouble(category, country) {
    return changedCategory(category), changedCountry(country);
  }
  function changedCategory(params) {
    props.changedCategory(params);
  }
  function changedCountry(params) {
    props.changedCountry(params);
  }
  return (
    <div id="left-area">
      <br />
      <img src={Logo} id="logo"></img>

      <br />
      <ListGroup>
        <ListGroupItem id="tr" onClick={() => changeDouble("general", "tr")}>
          Turkey News
        </ListGroupItem>
        <ListGroup>
          <ListGroupItem
            id="general"
            onClick={() => changeDouble("general", "tr")}
          >
            <img
              src="https://cdn-icons.flaticon.com/png/512/741/premium/741867.png?token=exp=1635240562~hmac=fa47f181fe02d9f086d42bc59148af3f"
              width="15px"
              height="15px"
            />
            General News
          </ListGroupItem>
          <ListGroupItem id="sport" onClick={() => changeDouble("sport", "tr")}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/857/857455.png"
              width="15px"
              height="15px"
            />{" "}
            Sport
          </ListGroupItem>
          <ListGroupItem
            id="economy"
            onClick={() => changeDouble("economy", "tr")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3310/3310624.png"
              width="15px"
              height="15px"
            />{" "}
            Economy
          </ListGroupItem>
          <ListGroupItem
            id="technology"
            onClick={() => changeDouble("technology", "tr")}
          >
            <img
              src="https://cdn-icons.flaticon.com/png/512/4365/premium/4365271.png?token=exp=1635237570~hmac=0693b512575c6d00df067798c3604d14"
              width="15px"
              height="15px"
            />{" "}
            Technology
          </ListGroupItem>
        </ListGroup>
        <ListGroupItem onClick={() => changeDouble("general", "de")} id="de">
          Germany News
        </ListGroupItem>
        <ListGroup>
          <ListGroupItem
            id="general"
            onClick={() => changeDouble("general", "de")}
          >
            <img
              src="https://cdn-icons.flaticon.com/png/512/741/premium/741867.png?token=exp=1635240562~hmac=fa47f181fe02d9f086d42bc59148af3f"
              width="15px"
              height="15px"
            />{" "}
            General News
          </ListGroupItem>
          <ListGroupItem id="sport" onClick={() => changeDouble("sport", "de")}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/857/857455.png"
              width="15px"
              height="15px"
            />{" "}
            Sport
          </ListGroupItem>
          <ListGroupItem
            id="economy"
            onClick={() => changeDouble("economy", "de")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3310/3310624.png"
              width="15px"
              height="15px"
            />{" "}
            Economy
          </ListGroupItem>
          <ListGroupItem
            id="technology"
            onClick={() => changeDouble("technology", "de")}
          >
            <img
              src="https://cdn-icons.flaticon.com/png/512/4365/premium/4365271.png?token=exp=1635237570~hmac=0693b512575c6d00df067798c3604d14"
              width="15px"
              height="15px"
            />{" "}
            Technology
          </ListGroupItem>
        </ListGroup>
        <ListGroupItem onClick={() => changeDouble("general", "en")} id="gb">
          England News
        </ListGroupItem>
        <ListGroup>
          <ListGroupItem
            id="general"
            onClick={() => changeDouble("general", "en")}
          >
            <img
              src="https://cdn-icons.flaticon.com/png/512/741/premium/741867.png?token=exp=1635240562~hmac=fa47f181fe02d9f086d42bc59148af3f"
              width="15px"
              height="15px"
            />{" "}
            General News
          </ListGroupItem>
          <ListGroupItem id="sport" onClick={() => changeDouble("sport", "en")}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/857/857455.png"
              width="15px"
              height="15px"
            />{" "}
            Sport
          </ListGroupItem>
          <ListGroupItem
            id="economy"
            onClick={() => changeDouble("economy", "en")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3310/3310624.png"
              width="15px"
              height="15px"
            />{" "}
            Economy
          </ListGroupItem>
          <ListGroupItem
            id="technology"
            onClick={() => changeDouble("technology", "en")}
          >
            <img
              src="https://cdn-icons.flaticon.com/png/512/4365/premium/4365271.png?token=exp=1635237570~hmac=0693b512575c6d00df067798c3604d14"
              width="15px"
              height="15px"
            />{" "}
            Technology
          </ListGroupItem>
        </ListGroup>
        <ListGroupItem onClick={() => changeDouble("general", "ru")} id="ru">
          Russia News
        </ListGroupItem>
        <ListGroup>
          <ListGroupItem
            id="general"
            onClick={() => changeDouble("general", "ru")}
          >
            <img
              src="https://cdn-icons.flaticon.com/png/512/741/premium/741867.png?token=exp=1635240562~hmac=fa47f181fe02d9f086d42bc59148af3f"
              width="15px"
              height="15px"
            />{" "}
            General News
          </ListGroupItem>
          <ListGroupItem id="sport" onClick={() => changeDouble("sport", "ru")}>
            <img
              src="https://cdn-icons.flaticon.com/png/512/4365/premium/4365271.png?token=exp=1635237570~hmac=0693b512575c6d00df067798c3604d14"
              width="15px"
              height="15px"
            />{" "}
            Sport
          </ListGroupItem>
          <ListGroupItem
            id="economy"
            onClick={() => changeDouble("economy", "ru")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3310/3310624.png"
              width="15px"
              height="15px"
            />{" "}
            Economy
          </ListGroupItem>
          <ListGroupItem
            id="technology"
            onClick={() => changeDouble("technology", "ru")}
          >
            <img
              src="https://cdn-icons.flaticon.com/png/512/4365/premium/4365271.png?token=exp=1635237570~hmac=0693b512575c6d00df067798c3604d14"
              width="15px"
              height="15px"
            />{" "}
            Technology
          </ListGroupItem>
        </ListGroup>
      </ListGroup>
    </div>
  );
}
