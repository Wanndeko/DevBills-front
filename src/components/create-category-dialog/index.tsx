import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"

import { theme } from "../../styles/themes"
import { createCategorySchema } from "../../validators/schema"
import { CreateCategoryData } from "../../validators/types"
import { Button } from "../button"
import { Dialog } from "../dialog"
import { Input } from "../input"
import { Titile } from "../title"
import { Container } from "./style"
import { useFetchAPI } from "../../hooks/useFetchAPI"

export function CreateCategoryDialog() {
  const { createCategory } = useFetchAPI()
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, formState } = useForm<CreateCategoryData>({
    defaultValues: {
      title: "",
      color: theme.color.primary
    },
    resolver: zodResolver(createCategorySchema)
  })

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const onSubmit = useCallback(
    async (data: CreateCategoryData) => {
      await createCategory(data)
      handleClose()
    },
    [handleClose, createCategory]
  )

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova Categoria</Button>}
    >
      <Container>
        <Titile
          Titile="Nova Categoria"
          subtitle="Crie uma nova categoria para suas transações"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              {...register("title")}
              label="Nome"
              placeholder="Nome da categoria..."
            />
            <Input {...register("color")} label="Cor" type="color" />
          </div>
          <footer>
            <Button onClick={handleClose} variant="outline" type="button">
              Cancelar
            </Button>
            <Button onClick={onSubmit} type="button">
              Cadastrar
            </Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  )
}
