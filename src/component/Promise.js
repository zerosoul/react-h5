import React, { Component } from "react";
import styled from "styled-components";
import FistImg from "../assets/img/fist.png";
import { rem } from "polished";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 103px;
  .decide {
    margin-bottom: 48px;
    .line1 {
      font-size: 28px;
      margin-bottom: 4px;
      em {
        font-size: 18px;
      }
    }
    .line2 {
      font-size: 24px;
    }
  }
  .promise {
    display: flex;
    .text {
      font-size: 45px;
      margin-left: 24px;
    }
    img {
      width: 58px;
      height: 100%;
    }
  }
  .lines {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin-top: 12px;
    .line {
      margin-bottom: 34px;
      font-size: 15px;
    }
  }
`;
export default class Promise extends Component {
  render() {
    return (
      <Content>
        <div className="decide">
          <p className="line1">
            未来十年<em>的</em>生死存亡
          </p>
          <p className="line2">本场会议决定！</p>
        </div>
        <div className="promise">
          <img src={FistImg} alt="拳头" />
          <p className="text">我们承诺！</p>
        </div>
        <div className="lines">
          <p className="line">没收获--随时退费</p>
          <p className="line">没干货--随时离场</p>
          <p className="line">不落地--随时退费</p>
          <p className="line">不认同--随时离场</p>
        </div>
      </Content>
    );
  }
}
