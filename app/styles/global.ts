import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
      margin:0;
      padding: 0px;
      inset:0px;
      box-sizing: border-box;
    }

    
    html,body{
      font-family: 'Work Sans', Arial;
      
      height: 100%;
      width: 100%;
      color: #000000;
      scroll-behavior:smooth;
    }

    a{
        text-decoration:  none;
        color:  inherit;
    }

    img, svg{
      user-select: none;
    }
`;

export default GlobalStyles;
