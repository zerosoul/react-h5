import React, { Component } from "react";
import styled from "styled-components";
import { rem } from "polished";
import anime from "animejs";

const Content = styled.div`
  position: relative;
  color: #fff;
  .tips {
    position: absolute;
    top: 170px;
    left: 60px;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    .tip {
      font-weight: 500;
      margin-bottom: 19px;
      overflow: hidden;
      .letter {
        transform-origin: 0 100%;
        display: inline-block;
        line-height: 1em;
      }
    }
  }
  .question {
    position: absolute;
    top: 95px;
    right: 60px;
    display: flex;
    flex-direction: row;

    writing-mode: vertical-lr;
    .big {
      font-family: "Fashion Zhonghei";
      font-weight: 400;
      font-size: 25px;
    }
    .small {
      font-weight: 400;
      font-size: 18px;

      writing-mode: vertical-lr;
    }
  }
  .nani {
    font-weight: 600;
    font-size: 115px;
    position: absolute;
    top: 246px;
    right: 115px;
  }
  .shapes {
    position: absolute;
    top: 362px;
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    left: 0;
    right: 0;
    margin: auto;
    .shape {
      display: flex;
      flex-direction: column;
      font-weight: 500;
      color: rgba(235, 54, 69, 1);
      clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
      background: rgba(255, 255, 255, 0.8);
      text-align: center;
      padding: 25px 15px;
      dt {
        font-size: 18px;
        margin-bottom: 5px;
      }
      dd {
        font-size: 14px;
      }
    }
  }
`;
export default class Where extends Component {
  constructor() {
    super();
    this.tips = React.createRef();
  }
  componentDidMount() {
    this.tips.current.querySelectorAll(".tip").forEach(node => {
      console.log("node", node);

      let arr = node.innerText;
      let newArr = arr.split("").map(t => `<span class='letter'>${t}</span>`);
      node.innerHTML = newArr.join("");
    });
    anime
      .timeline({ loop: false })
      .add({
        targets: ".tips .tip .letter",
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: function(el, i) {
          return 50 * i;
        }
      })
      .add({
        targets: ".shapes .shape",
        rotate: "2turn",
        translateY: [-20, 0],
        delay: anime.stagger(500),
        opacity: [0, 1]
      });
  }
  render() {
    return (
      <Content>
        <div className="tips" ref={this.tips}>
          <p className="tip">政策越来越严！</p>
          <p className="tip">幼儿园越来越多！</p>
          <p className="tip">幼儿园越来越豪！</p>
        </div>
        <div className="question">
          <p className="big">何去何从</p>
          <p className="small">内外交困</p>
        </div>
        <em className="nani">?</em>
        <div className="shapes">
          <p className="shape">
            <dt>学生</dt>
            <dd>招不来</dd>
          </p>
          <p className="shape">
            <dt>家长</dt>
            <dd>留不住</dd>
          </p>
          <p className="shape">
            <dt>教师</dt>
            <dd>培训难</dd>
          </p>
        </div>
      </Content>
    );
  }
}
