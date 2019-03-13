import React, { Component } from "react";
import styled from "styled-components";
import AirPlane from "../assets/img/airplane.png";
import anime from "animejs";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 140px;
  z-index: 9999;
  img {
    width: 100%;
  }
`;
export default class Airplane extends Component {
  constructor() {
    super();
    this.Airplane = React.createRef();
  }
  componentDidMount() {
    anime({
      targets: this.Airplane.current,
      translateY: [20, 0],
      translateX: [-20, 0],
      rotate: [-90, 0],
      duration: 2000,
      opacity: [0, 1],
      easing: "easeOutExpo"
    });
  }
  render() {
    return (
      <Wrapper ref={this.Airplane}>
        <img src={AirPlane} alt="飞机" />
      </Wrapper>
    );
  }
}
