import React from "react";
import styled from "styled-components";
import FistImg from "../assets/img/fist.png";
import anime from "animejs";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 103px;
  .decide {
    font-family: "Fashion Zhonghei";
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
    .letter {
      display: inline-block;
      line-height: 1em;
    }
  }
  .promise {
    display: flex;
    .text {
      font-family: "Fashion Zhonghei";
      font-size: 45px;
      margin-left: 24px;
      .word {
        display: inline-block;
      }
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
export default class Promise extends React.PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    wrapper.querySelectorAll(".decide .line2,.decide .line1").forEach(node => {
      console.log("node", node);

      let arr = node.innerText;
      let newArr = arr.split("").map(t => `<span class='letter'>${t}</span>`);
      node.innerHTML = newArr.join("");
    });
    const fistImg = wrapper.querySelector(".fist");
    const titleLetters = wrapper.querySelectorAll(".decide .letter");
    const words = wrapper.querySelectorAll(".promise .text .word");
    const lines = wrapper.querySelectorAll(".lines .line");

    anime
      .timeline()
      .add({
        targets: titleLetters,
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 2000,
        delay: function(el, i) {
          return 70 * i;
        }
      })
      .add({
        targets: words,
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: function(el, i) {
          return 800 * i;
        }
      })
      .add({
        targets: fistImg,
        translateX: [-200, 0]
      })
      .add({
        targets: lines,
        translateX: function(el, i) {
          return 50 * i - 80;
        },
        opacity: [0, 1],
        delay: (el, i) => {
          return 300 * i;
        }
      });
  }
  render() {
    return (
      <Content ref={this.wrapper}>
        <div className="decide">
          <p className="line1">
            未来十年<em>的</em>生死存亡
          </p>
          <p className="line2">本场会议决定！</p>
        </div>
        <div className="promise">
          <img className="fist" src={FistImg} alt="拳头" />
          <p className="text">
            <span className="word">我们</span>
            <span className="word">承诺！</span>
          </p>
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
