import React from "react";
import styled from "styled-components";
import anime from "animejs";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 102px;
  .point {
    font-size: 30px;
    margin-bottom: 40px;
    padding: 12px 0;
    position: relative;
    .line {
      opacity: 0;
      position: absolute;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: #fff;
      transform-origin: 0 0;
      &.line1 {
        top: 0;
      }
      &.line2 {
        bottom: 0;
      }
    }
  }
  .words {
    display: flex;
    .word .letter {
      transform-origin: 50% 100%;
      display: inline-block;
    }
    .left {
      display: flex;
      flex-direction: column;
      margin-right: 22px;
      > .line {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      .low {
        font-family: "Fashion Zhonghei";
        font-size: 32px;
        font-weight: 500;
        padding-right: 21px;
        &.boom {
          font-family: "Fashion Zhonghei";
          padding-right: 12px;
        }
      }
      .line1 {
        margin-bottom: 8px;
        padding-right: 10px;
        text-align: left;
        justify-content: flex-start;
        .leaflet {
          font-size: 26px;
          padding-right: 19px;
        }
      }
      .line2 {
        padding-bottom: 30px;
        text-align: right;
        .ball {
          font-size: 15px;
          padding-right: 14px;
        }
      }
      .line3 {
        font-size: 20px;
        text-align: right;

        .ai {
          padding-right: 10px;
        }
        .zs {
          color: #ee3a44;
          padding: 7px 15px;
          background: #fff;
        }
      }
    }
    .right {
      .what {
        font-size: 20px;
        writing-mode: vertical-lr;
      }
    }
  }
  .solution {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-family: "Fashion Zhonghei";
      font-size: 30px;
    }
    .sub_title {
      margin-top: 23px;
      font-size: 20px;
    }
  }
`;
export default class Zhaosheng extends React.PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    wrapper.querySelectorAll(".point .letters,.words .word").forEach(node => {
      console.log("node", node);

      let arr = node.innerText;
      let newArr = arr.split("").map(t => `<span class='letter'>${t}</span>`);
      node.innerHTML = newArr.join("");
    });
    const wordBox = wrapper.querySelector(".words");
    const solutionBox = wrapper.querySelector(".solution");
    const titleLetters = wrapper.querySelectorAll(".point .letter");
    const titleLines = wrapper.querySelectorAll(".point .line");
    const firstLetters = wrapper.querySelectorAll(".words .word.first .letter");
    const secondLetters = wrapper.querySelectorAll(
      ".words .word.second .letter"
    );
    const thirdLetters = wrapper.querySelectorAll(".words .word.third .letter");
    const fourthLetters = wrapper.querySelectorAll(
      ".words .word.fourth .letter"
    );
    const zsLetter = wrapper.querySelector(".words .word.zs");
    console.log("thirdLetters", thirdLetters);

    anime
      .timeline()
      .add({
        targets: titleLetters,
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: function(el, i) {
          return 70 * (i + 1);
        }
      })
      .add({
        targets: titleLines,
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: "-=875",
        delay: function(el, i, l) {
          return 80 * (l - i);
        }
      })
      .add({
        targets: firstLetters,
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: function(el, i) {
          return 45 * (i + 1);
        }
      })
      .add(
        {
          targets: secondLetters,
          scale: [0, 1],
          duration: 1000,
          elasticity: 600,
          delay: function(el, i) {
            return 45 * (i + 1);
          }
        },
        "-=500"
      )
      .add({
        targets: thirdLetters,
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: function(el, i) {
          return 80 * (i + 1);
        }
      })
      .add(
        {
          targets: fourthLetters,
          scale: [0, 1],
          duration: 1000,
          elasticity: 900,
          delay: function(el, i) {
            return 45 * (i + 1);
          }
        },
        "-=1500"
      )
      .add({
        targets: zsLetter,
        scale: [8, 1],
        opacity: [0, 1],
        duration: 1000,
        elasticity: 200,
        complete: () => {
          wordBox.remove();
        }
      })
      .add({
        targets: solutionBox,
        scale: [8, 1],
        opacity: [0, 1],
        duration: 1000,
        elasticity: 600
      });
  }
  render() {
    return (
      <Content ref={this.wrapper}>
        <h1 className="point">
          <span className="line line1" />
          <span className="line line2" />
          <span className="letters">招生智能化</span>
        </h1>
        <div className="words">
          <div className="left">
            <p className="line line1">
              <span className="word first leaflet">发传单？</span>
              <span className="word second low">LOW</span>
            </p>
            <p className="line line2">
              <span className="word first ball">送气球？</span>
              <span className="word second low boom">爆了</span>
            </p>
            <p className="line line3">
              <span className="word fourth auto">自动、</span>
              <span className="word fourth ai">智能化</span>
              <span className="word zs">招生</span>
            </p>
          </div>
          <div className="right">
            <span className="word third what">什么样的方式能</span>
          </div>
        </div>
        <div className="solution">
          <p className="title">足不出户，生源爆满</p>
          <p className="sub_title">借助互联网轻松实现</p>
        </div>
      </Content>
    );
  }
}
