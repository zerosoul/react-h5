import React, { Component } from "react";
import styled from "styled-components";
import { rem } from "polished";

const Wrapper = styled.p`
  font-size: 9px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  opacity: 0.8;
  position: absolute;
  bottom: 45px;
  right: 8px;
  opacity: 0.8;
`;
export default class Slogan extends Component {
  render() {
    return <Wrapper>壹点壹滴，中国最具影响力互联网平台</Wrapper>;
  }
}
