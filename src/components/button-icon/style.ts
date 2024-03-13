import { styled } from "styled-components"

import { theme } from "../../styles/themes"

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 0.25rem;
  background-color: ${theme.color.primary};
  color: ${theme.color.neutral};
  border: 0;
  padding: 0;
  transition: all 100ms;

  &:hover {
    background-color: ${theme.color.primaryDark};
  }

  svg {
    fill: ${theme.color.black};
    height: 1.25rem;
    width: 3rem;
  }
`
