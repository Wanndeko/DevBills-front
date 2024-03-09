import { Button } from "../components/button"
import { Logo } from "../components/Logo"
import { Header } from "./style"

export function Home() {
  return (
    <Header>
      <Logo />
      <div>
        <Button>Nova Transação</Button>
        <Button>Nova Categoria</Button>
      </div>
    </Header>
  )}
