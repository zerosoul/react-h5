import React, { Component } from "react";
import Wrapper from "./SliderWrapper";
import Slogan from "./Slogan";
export default class Intro extends Component {
  render() {
    return (
      <Wrapper className="swiper-slide">
        <Slogan />
      </Wrapper>
    );
  }
}
