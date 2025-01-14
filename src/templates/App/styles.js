import style from 'styled-components';
import { css } from 'styled-components';

export const Container = style.h1`
  ${({ theme, color }) => css`
    background-color: ${theme.colors.primary};
    color: ${color};
    padding: 20px;
  `}
`;
