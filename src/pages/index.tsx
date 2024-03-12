import { Button } from "../components/button"
import { Input } from "../components/input"
import { Logo } from "../components/Logo"
import { Titile } from "../components/title"
import { Filters, Header, Main, Section } from "./style"

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
            <div>
              <Input />
            </div>
          </Filters>
        </Section>
      </Main>
    </>
  )
}
