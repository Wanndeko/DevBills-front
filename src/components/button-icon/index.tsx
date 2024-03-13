import { MagnifyingGlass } from "@phosphor-icons/react"
import { ComponentProps, forwardRef } from "react"

import { Container } from "./style"

type ButtonIconProps = ComponentProps<"button">

export const ButtonICon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  function Button({ ...props }, ref) {
    return (
      <Container {...props} ref={ref}>
        <MagnifyingGlass />
      </Container>
    )
  }
)
