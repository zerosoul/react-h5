import React, { PureComponent } from "react";
import styled from "styled-components";
import ani from "animejs";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  padding-top: 115px;
  .lines {
    width: 90%;
    display: flex;
    flex-direction: column;
    .line {
      font-size: 14px;
      margin-bottom: 28px;
      align-self: center;
      &.left {
        align-self: flex-start;
      }
      &.right {
        align-self: flex-end;
      }
      em {
        margin-left: 17px;
        font-size: 24px;
        font-weight: 800;
      }
    }
  }
  .how {
    font-size: 30px;
    margin-bottom: 70px;
    font-weight: 800;
  }
  .answer {
    font-family: "Fashion Zhonghei";
    font-size: 24px;
    margin-bottom: 33px;
    overflow: hidden;
    .letter {
      display: inline-block;
    }
  }
  .tip {
    font-size: 14px;
    overflow: hidden;
    .letter {
      display: inline-block;
    }
  }
`;
export default class How extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapperEle = this.wrapper.current;
    wrapperEle.querySelectorAll(".tip,.answer").forEach(node => {
      let arr = node.innerText;
      let newArr = arr.split("").map(t => `<span class='letter'>${t}</span>`);
      node.innerHTML = newArr.join("");
    });
    const lines = wrapperEle.querySelectorAll(".lines .line");
    const how = wrapperEle.querySelector(".how");
    const letters = wrapperEle.querySelectorAll(".answer .letter,.tip .letter");
    ani
      .timeline()
      .add({
        targets: lines,
        delay: (el, i) => {
          return i * 500;
        },
        translateX: [-600, 0]
      })
      .add({
        targets: how,
        opacity: [0, 1],
        scale: [8, 1.5]
      })
      .add({
        targets: letters,
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: function(el, i) {
          return 50 * i;
        }
      });
  }
  render() {
    return (
      <Content ref={this.wrapper}>
        <div className="lines">
          <p className="line left">
            老套路<em>效果差！</em>
          </p>
          <p className="line">
            高科技<em>玩不转！</em>
          </p>
          <p className="line right">
            打广告<em>浪费钱！</em>
          </p>
        </div>
        <p className="how">怎么办？</p>
        <p className="answer">借助互联网轻松实现</p>
        <p className="tip">快速招生、家长满意、教师成长、安全管控</p>
      </Content>
    );
  }
}
