import { Container } from "./style"

type TitleProps = {
  Titile: string
  subtitle: string
}

export function Titile({ Titile, subtitle }: TitleProps) {
  return (
    <>
      <Container>
        <h2>{Titile}</h2>
        <span>{subtitle}</span>
      </Container>
    </>
  )
}
