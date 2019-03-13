import React, { PureComponent } from "react";
import Wrapper from "./SliderWrapper";
import styled from "styled-components";
// import ani from "animejs";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 170px;
`;
export default class Intro extends PureComponent {
  render() {
    return (
      <Wrapper className="swiper-slide">
        <Content>slide frame</Content>
      </Wrapper>
    );
  }
}
