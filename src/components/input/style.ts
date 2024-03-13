import styled from "styled-components"

import { theme } from "../../styles/themes"

type ContainerProps = {
  $variant: "black" | "dark"
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  width: 100%;

  label {
    color: ${theme.color.white};
    font-size: 0.625rem;
  }

  input {
    height: 2.25rem;
    background-color: ${(props) => theme.color[props.$variant]};
    border: 0;
    border-radius: 0.25rem;
    padding: 0 0.75rem;
    color: ${theme.color.neutral};
    font-size: 1rem;
    width: 100%;
    border: 1px solid transparent;
    transition: all 100ms;

    &:focus {
      border-color: ${theme.color.primary};
    }

    &::placeholder {
      color: ${theme.color.neutral};
    }
  }
`
