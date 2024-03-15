import { InputMask } from "@react-input/mask"

import { Button } from "../components/button"
import { ButtonICon } from "../components/button-icon"
import { Card } from "../components/card"
import { Input } from "../components/input"
import { Logo } from "../components/Logo"
import { Titile } from "../components/title"
import { Balance, Filters, Header, InputGroup, Main, Section } from "./style"

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
          <Balance>
            <Card title="Saldo" amount={1000000} />
            <Card title="Saldo" amount={1000000} variant="incomes" />
            <Card title="Saldo" amount={1000000} variant="expenses" />
          </Balance>
        </Section>
      </Main>
    </>
  )
}
