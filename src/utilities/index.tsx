import { css, CSSObject } from 'styled-components/macro';

type RuleOrQueryType = CSSObject | TemplateStringsArray;

const mediaQuery = (query: RuleOrQueryType) => (rules: RuleOrQueryType) =>
  css`
    @media screen and (${css(query)}) {
      ${css(rules)}
    }
  `;

/**
 * Media quries - Sample use
 * ${media.mobile`
      display: block;
    `}
 */

const media = {
  smallMobile: mediaQuery`min-width: 320px`, // iphone 5/SE
  mobile: mediaQuery`min-width: 414px`, // small mobile
  mobileLarge: mediaQuery`min-width: 576px`, // mobile (surface duo)
  tablet: mediaQuery`min-width: 768px`, // tablets
  landscapeTablet: mediaQuery`min-width: 991px`, //big tablets
  smallDesktop: mediaQuery`min-width: 1024px`, // tablets landscape, small desktops
  largeScreens: mediaQuery`min-width: 1200px`, // tablets landscape, small desktops
};


export default media;
