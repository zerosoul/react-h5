import { useEffect, useRef } from "react";
import styled from "styled-components";
import ImageAirPlane from "../assets/img/airplane.png";
import anime from "animejs";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 140px;
  z-index: 9999;
  img {
    width: 100%;
  }
`;

export default function AirPlane() {
  const wrapper = useRef(null);
  useEffect(() => {
    if (wrapper) {
      anime({
        targets: wrapper.current,
        translateY: [20, 0],
        translateX: [-20, 0],
        rotate: [-90, 0],
        duration: 2000,
        opacity: [0, 1],
        easing: "easeOutExpo",
      });
    }
  }, []);
  return (
    <Wrapper ref={wrapper}>
      <img src={ImageAirPlane} alt="飞机" />
    </Wrapper>
  );
}
