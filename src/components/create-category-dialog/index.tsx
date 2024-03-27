import { useState } from "react"

import { Button } from "../button"
import { Dialog } from "../dialog"

export function CreateCategoryDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova Transação</Button>}
    >
      olá
    </Dialog>
  )
}
