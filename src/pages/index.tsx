import { InputMask } from "@react-input/mask"

import { Button } from "../components/button"
import { ButtonICon } from "../components/button-icon"
import { Input } from "../components/input"
import { Logo } from "../components/Logo"
import { Titile } from "../components/title"
import { Filters, Header, InputGroup, Main, Section } from "./style"

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <Button>Nova Transação</Button>
          <Button>Nova Categoria</Button>
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Titile Titile="Saldo" subtitle="Receitas e despesas no periodo" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="DD/MM/AAAA"
              />
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="DD/MM/AAAA"
              />
              <ButtonICon />
            </InputGroup>
          </Filters>
        </Section>
      </Main>
    </>
  )
}
