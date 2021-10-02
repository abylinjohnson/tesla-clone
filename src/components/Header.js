import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/carSlides/carSlice";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
function Header() {
  const [burgerStatus, setburgerStatus] = useState(true);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <Button>
        <img src="/images/logo.svg" alt="the tesla logo" />
      </Button>
      <Menu>
        <Button>Model S</Button>

        <Button>Model 3</Button>

        <Button>Model X</Button>

        <Button>Model Y</Button>

        <Button>Solar Roof</Button>

        <Button>Solar Panels</Button>
      </Menu>
      <RightMenu>
        <Button>SHOP</Button>
        <Button>ACCOUNT</Button>
      </RightMenu>
      <MenuIcon>
        <Button onClick={() => setburgerStatus(false)}>MENU</Button>
      </MenuIcon>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setburgerStatus(true)} />
        </CloseWrapper>
        <li>
          <Button href="">Existing Inventory</Button>
        </li>
        <li>
          <Button>Used Inventory</Button>
        </li>
        <li>
          <Button>Trade-in</Button>
        </li>
        <li>
          <Button>Cybertruck</Button>
        </li>
        <li>
          <Button>Roadster</Button>
        </li>
        <li>
          <Button>Semi</Button>
        </li>
        <li>
          <Button>Charging</Button>
        </li>
        <li>
          <Button>Powerwall</Button>
        </li>
        <li>
          <Button>Commercial Energy</Button>
        </li>
        <li>
          <Button>Utilities</Button>
        </li>
        <li>
          <Button>Find Us</Button>
        </li>
        <li>
          <Button>Support</Button>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: 500;
  text-decoration: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  a {
    font-weight: 500;
    text-decoration: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    text-decoration: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) =>
    props.show ? "translateX(100%);" : "translateX(0);"};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;

    a {
      font-weight: 300;
    }
  }
`;

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    text-decoration: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    padding: 5px;
    font-weight: 600;
    @media (max-width: 768px) {
      background-color: rgb(0, 0, 0, 0.2);
      border-radius: 50px;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
