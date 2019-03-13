import React, { Component } from "react";
import styled from "styled-components";
import SlideWrapper from "./SliderWrapper";
import LogoImg from "../assets/img/logo.png";

const Content = styled.div`
  .progress {
    position: absolute;
    font-size: 15px;
    color: rgba(255, 220, 219, 1);
    top: 250px;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 30px;
  }
  .logo {
    position: absolute;
    bottom: 65px;
    left: 0;
    right: 0;
    margin: auto;
    width: 117px;
  }
`;
export default class Loading extends Component {
  render() {
    const { progress = 0 } = this.props;
    return (
      <SlideWrapper>
        <Content>
          <p className="progress">{progress}%</p>
          <img className="logo" src={LogoImg} alt="公司图标" />
        </Content>
      </SlideWrapper>
    );
  }
}
