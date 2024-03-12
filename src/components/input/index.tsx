import { ComponentProps } from "react"

import { Container } from "./style"

type InputProps = ComponentProps<"input"> & {
  label?: string
  variant?: "black" | "dark"
}

export function Input({ label, variant, ...props }: InputProps) {
  return (
    <>
      <Container>
        {label && <label>{label}</label>}
        <input {...props} />
      </Container>
    </>
  )
}
