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
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>

        <a href="#">Solar Roof</a>

        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">SHOP</a>
        <a href="#">ACCOUNT</a>
      </RightMenu>
      <MenuIcon>
        <Button onClick={() => setburgerStatus(false)}>MENU</Button>
      </MenuIcon>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setburgerStatus(true)} />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
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
