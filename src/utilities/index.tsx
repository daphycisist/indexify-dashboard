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
  smallMobile: mediaQuery`min-width: 320px`,
  mobile: mediaQuery`min-width: 414px`,
  mobileLarge: mediaQuery`min-width: 480px`, 
  mobileXLarge: mediaQuery`min-width: 576px`,
  tablet: mediaQuery`min-width: 768px`,
  landscapeTablet: mediaQuery`min-width: 991px`,
  smallDesktop: mediaQuery`min-width: 1024px`,
  largeScreens: mediaQuery`min-width: 1200px`,
};


export default media;
