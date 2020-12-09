import { useEffect, useRef } from "react";

import styled from "styled-components";
import ArrowImg from "../assets/img/arrow.png";
import anime from "animejs";

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  width: 22px;
  height: 17px;
  z-index: 9999;
  left: 0;
  right: 0;
  margin: auto;
  img {
    width: 100%;
  }
`;

export default function Arrows() {
  const wrapper = useRef(null);
  useEffect(() => {
    if (wrapper) {
      anime({
        targets: wrapper.current,
        translateY: -10,
        duration: 1000,
        opacity: [0.4, 1],
        easing: "easeOutExpo",
        loop: true,
      });
    }
  }, []);
  return (
    <Wrapper ref={wrapper}>
      <img src={ArrowImg} alt="导航箭头" />
    </Wrapper>
  );
}
