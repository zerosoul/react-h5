import React, { Component } from "react";
import styled from "styled-components";
import { rem } from "polished";
import anime from "animejs";

const Wrapper = styled.div`
  z-index: 9999;
  position: fixed;
  top: 364px;
  right: 2px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  color: #fff;
  padding: 6px;
  writing-mode: vertical-lr;
  letter-spacing: 4px;
`;
export default class Tel extends Component {
  constructor() {
    super();
    this.tel = React.createRef();
  }
  componentDidMount() {
    anime({
      targets: this.tel.current,
      right: [-30, 2],
      duration: 1500
    });
  }
  render() {
    return <Wrapper ref={this.tel}>电话咨询</Wrapper>;
  }
}
