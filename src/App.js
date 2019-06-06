import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { hot } from "react-hot-loader/root";
import Swiper from "swiper";
import Music from "./component/Music";
import Particles from "./component/Particles";
import Arrows from "./component/Arrows";
import Logo from "./component/Logo";
import Signup from "./component/Signup";
import Tel from "./component/Tel";
import Intro from "./component/Intro.js";
import How from "./component/How.js";
import Open from "./component/Open.js";
import Where from "./component/Where.js";
import Submit from "./component/Submit.js";
import Promise from "./component/Promise.js";
import Loading from "./component/Loading.js";
import SlideWrapper from "./component/SliderWrapper";
import Slogan from "./component/Slogan";
import AirPlane from "./component/AirPlane";
import Zhaosheng from "./component/Zhaosheng";

const GlobalStyle = createGlobalStyle`
  ${reset}
 
  @media screen and (min-width: 375px){
      html {
          font-size: 14.0625px;   
      }
  }
  @media screen and (min-width: 360px){
      html {
          font-size: 13.5px;
      }
  }
  @media screen and (min-width: 320px){
      html {
          font-size: 12px;
      }
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    font-weight:400;
    max-width:620px;
    color:#fff;
    font-family:"PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  .swiper-container {
    width: 100vw;
    height: 100vh;
}
`;
class App extends Component {
  state = {
    loading: true,
    progress: 90,
    mySwiper: null,
    slides: [false]
  };
  constructor() {
    super();
    this.interNum = null;
    this.mySwiper = null;
  }
  initSwiper = () => {
    this.setState({
      loading: false
    });
    const mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "vertical",
      loop: false,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      }
    });

    mySwiper.on("slideChange", wtf => {
      console.log("wtf", mySwiper);
      const { activeIndex } = mySwiper;
      let newSlides = new Array(mySwiper.slides.length).fill(false);
      newSlides[activeIndex] = true;
      this.setState({
        slides: newSlides
      });
    });
    const initSlides = new Array(mySwiper.slides.length).fill(false);
    initSlides[0] = true;
    this.setState({
      mySwiper,
      slides: initSlides
    });
  };
  componentDidMount() {}
  render() {
    const { loading, mySwiper, slides } = this.state;
    const [
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eigth,
      ninth
    ] = slides;
    console.log("slides array", slides);

    return (
      <>
        <GlobalStyle />
        {loading ? (
          <Loading onInitOver={this.initSwiper} />
        ) : (
          <>
            <Music />
            <Arrows />
            <Tel />
            <Signup currSwiper={mySwiper} />
            {/* <!-- Slider main container --> */}
            <div className="swiper-container">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper">
                {/* <!-- Slides --> */}
                <SlideWrapper className="swiper-slide">
                  <Logo />
                  <Slogan />
                  {first && (
                    <>
                      <Particles type="lines" />
                      <AirPlane />
                      <Open />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Logo />
                  <Slogan />
                  {second && (
                    <>
                      <AirPlane />
                      <Particles type="nightSky" />
                      <Where />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Logo />
                  <Slogan />
                  {third && (
                    <>
                      <AirPlane />
                      <Particles type="bubble" />
                      <How />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Logo />
                  <Slogan />
                  {fourth && (
                    <>
                      <AirPlane />
                      <Particles />
                      <Promise />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Logo />
                  <Slogan />
                  {fifth && (
                    <>
                      <Submit />
                      <Particles type="lines" />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Logo />
                  <Slogan />
                  {sixth && (
                    <>
                      <Zhaosheng />
                      <Particles />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Logo />
                  <Slogan />
                  {seventh && (
                    <>
                      <AirPlane />
                      <Intro />
                      <Particles type="nightSky" />
                    </>
                  )}
                </SlideWrapper>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default hot(App);