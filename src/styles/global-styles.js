import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    font-family: ${theme.fonts.primary};
  `};
 }
`;
