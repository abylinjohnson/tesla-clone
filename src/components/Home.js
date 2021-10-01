import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless "
        backgroundImage="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        arrow="/images/down-arrow.svg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless "
        backgroundImage="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless "
        backgroundImage="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless "
        backgroundImage="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        leftBtnText="ORDER NOW"
        rightBtnText="LEARN MORE"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        leftBtnText="ORDER NOW"
        rightBtnText="LEARN MORE"
      />
      <Section
        title="Accessories"
        backgroundImage="accessories.jpg"
        leftBtnText="ORDER NOW"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
