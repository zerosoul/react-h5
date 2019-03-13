import React, { Component } from "react";
import styled from "styled-components";
import { rem } from "polished";
import anime from "animejs";

const Wrapper = styled.div`
  z-index: 9999;
  position: fixed;
  top: 273px;
  right: 2px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  color: #fff;
  padding: 6px;
  writing-mode: vertical-lr;
  letter-spacing: 4px;
`;
export default class Signup extends Component {
  constructor() {
    super();
    this.signup = React.createRef();
  }
  componentDidMount() {
    anime({
      targets: this.signup.current,
      right: [-30, 2],
      duration: 1500
    });
  }
  render() {
    const { currSwiper } = this.props;
    console.log("swiper", currSwiper);

    return (
      <Wrapper
        onClick={() => {
          currSwiper.slideTo(2);
        }}
        ref={this.signup}
      >
        点击报名
      </Wrapper>
    );
  }
}
