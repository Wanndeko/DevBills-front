import styled from "styled-components"

import { theme } from "../../styles/themes"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  h2 {
    font-size: 1.25rem;
    color: ${theme.color.light};
    font-weight: 700;
  }

  span {
    font-size: 0.875rem;
    color: ${theme.color.neutral};
    font-weight: 400;
  }
`
