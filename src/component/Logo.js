import { PureComponent, createRef } from "react";
import styled from "styled-components";
import LogoImg from "../assets/img/logo.png";

const Wrapper = styled.div`
  position: absolute;

  top: 20px;
  left: 20px;

  width: 117px;
  /* height: 17px; */
  z-index: 9999;
  img {
    width: 100%;
  }
`;
export default class Logo extends PureComponent {
  constructor() {
    super();
    this.Logo = createRef();
  }
  render() {
    return (
      <Wrapper ref={this.Logo}>
        <img src={LogoImg} alt="公司图标" />
      </Wrapper>
    );
  }
}
