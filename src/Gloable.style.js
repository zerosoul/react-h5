import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
  #root{
    max-width: 640px;
    margin: 0 auto;
  }
  .swiper-container {
      width: 100%;
      height: 100vh;
  }
  `;
export default GlobalStyle;
