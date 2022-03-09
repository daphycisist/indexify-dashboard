import { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    letter-spacing: -0.0005em;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    color: inherit;
  }

  .modal {
    position: relative;
  }
/*   
  .modal-base {
  top: 7.9rem;
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid ${COLORS['off-white']};
  width: 50%;
  opacity: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  transform: scale(0.8);
}

.modal-base_after-open {
  opacity: 1;
  transform: scale(1);
}

.modal-base_before-close {
  transform: scale(0.2);
  opacity: 0;
}

.overlay-base {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 17, 41, 0.5);
  opacity: 0;
  transition: all 0.3s ease-out;
}

.overlay-base_after-open {
  opacity: 1;
}

.overlay-base_before-close {
  opacity: 0;
}

.modal-base_close-btn {
  position: "absolute";
  top: "0";
  right: "-32px";
  border-radius: "50%";
  outline: "none";
  border: "none";
  display: "grid";
  place-content: "center";
  width: "24px";
  height: "24px";
  padding: "0.8rem";
  background-color: ${COLORS.white}
}
 */

`;

export default GlobalStyles;
