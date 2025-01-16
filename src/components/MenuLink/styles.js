import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    text-decoration: none;
    padding: ${theme.spacings.medium};
    color: ${theme.colors.secondary};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background-color: ${theme.colors.secondary};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      width: 50%;
      left: 25%;
    }
  `}
`;
