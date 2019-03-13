import React, { Component } from "react";
import styled from "styled-components";
import { rem } from "polished";
import anime from "animejs";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 170px;
  .title {
    font-family: "Fashion Zhonghei";
    font-size: 30px;
    margin-bottom: 15px;
  }
  .new_way {
    position: relative;
    border: 1px solid rgba(255, 255, 255, 1);
    opacity: 0.6;
    border-radius: 24px;
    font-weight: 500;
    font-size: 15px;
    padding: 5px 15px;
    margin-bottom: 11px;
    .line {
      opacity: 0;
      position: absolute;
      left: 15px;
      top: 4px;
      height: 70%;
      width: 3px;
      background-color: #fff;
      transform-origin: 0 50%;
    }
  }
  .sub_title {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
  }
  .open_now {
    font-family: "Fashion Zhonghei";
    font-size: 30px;
    .word {
      display: inline-block;
      letter-spacing: 4px;
    }
  }
  .info {
    position: absolute;
    top: 500px;
    left: 38px;
    font-size: 10px;
    font-weight: 500;
    > p {
      margin-bottom: 3px;
    }
  }
`;
export default class Open extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    this.wrapper.current
      .querySelectorAll(".title,.sub_title,.new_way .letters")
      .forEach(node => {
        console.log("node", node);

        let arr = node.innerText;
        let newArr = arr.split("").map(t => `<span class='letter'>${t}</span>`);
        node.innerHTML = newArr.join("");
      });
    const titleLetters = this.wrapper.current.querySelectorAll(
      ".title .letter,.sub_title .letter"
    );
    const words = this.wrapper.current.querySelectorAll(".open_now .word");
    const box = this.wrapper.current.querySelector(".new_way");
    const letterBox = box.querySelector(".letters");
    const boxLetters = letterBox.querySelectorAll(".letter");
    const line = this.wrapper.current.querySelectorAll(".new_way .line");
    console.log("letters", titleLetters);

    anime
      .timeline({ loop: false })
      .add({
        targets: titleLetters,
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 750,
        delay: function(el, i) {
          return 150 * (i + 1);
        }
      })
      .add({
        targets: box,
        opacity: [0, 0.6],
        easing: "easeOutExpo",
        duration: 500
      })
      .add({
        targets: line,
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 500
      })
      .add({
        targets: line,
        translateX: [0, letterBox.offsetWidth],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      })
      .add({
        targets: boxLetters,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: function(el, i) {
          return 36 * (i + 1);
        }
      })
      .add({
        targets: line,
        opacity: 0,
        duration: 500,
        easing: "easeOutExpo",
        delay: 500
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
      });
  }
  render() {
    return (
      <Content ref={this.wrapper}>
        <p className="title">互联网助力幼儿园</p>
        <p className="title">运营管理升级主题论坛</p>
        <p className="sub_title">一场改变幼教人命运的课程</p>
        <p className="new_way">
          <span className="line" />
          <span className="letters">幼教新十年民办幼儿园的新出路</span>
        </p>
        <h1 className="open_now">
          <span className="word">马上</span>
          <span className="word">开幕！</span>
        </h1>
        <div className="info">
          <p>3月21日—3月22日</p>
          <p>郑州市二七区二七广场</p>
        </div>
      </Content>
    );
  }
}
