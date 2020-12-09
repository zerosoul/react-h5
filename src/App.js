import React, { Component } from "react";
import Swiper from "swiper";
import GlobalStyle from "./Gloable.style";

import Music from "./component/Music";
import Particles from "./component/Particles";
import Arrows from "./component/Arrows";
import Logo from "./component/Logo";
import Signup from "./component/Signup";
import Tel from "./component/Tel";
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

class App extends Component {
  state = {
    loading: true,
    progress: 90,
    mySwiper: null,
    slides: [false],
  };
  initSwiper = () => {
    this.setState({
      loading: false,
    });
    const mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "vertical",
      loop: false,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });

    mySwiper.on("slideChange", (wtf) => {
      console.log("wtf", mySwiper);
      const { activeIndex } = mySwiper;
      let newSlides = new Array(mySwiper.slides.length).fill(false);
      newSlides[activeIndex] = true;
      this.setState({
        slides: newSlides,
      });
    });
    const initSlides = new Array(mySwiper.slides.length).fill(false);
    initSlides[0] = true;
    this.setState({
      mySwiper,
      slides: initSlides,
    });
  };
  componentDidMount() {}
  render() {
    const { loading, mySwiper, slides } = this.state;
    const [first, second, third, fourth, fifth, sixth] = slides;
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
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default App;
