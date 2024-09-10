import { X } from 'lucide-react'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
export function CreateGoal() {
  const semana = [
    { number: 1, icon: '🥱' },
    { number: 2, icon: '🥱' },
    { number: 3, icon: '🥱' },
    { number: 4, icon: '🥱' },
    { number: 5, icon: '🥱' },
    { number: 6, icon: '🥱' },
    { number: 7, icon: '🔥' },
  ]
  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full overflow-auto">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>

        <form className="flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label>Qual a atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Quantas vezes na semana?</Label>
              <RadioGroup>
                {semana.map(s => (
                  <RadioGroupItem key={s.number} value={s.number.toString()}>
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-medium leading-none">
                      {s.number === 7
                        ? 'Todos os dias da semana'
                        : `${s.number}x na semana`}
                    </span>
                    <span className="text-lg leading-none">{s.icon}</span>
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button variant="secondary" className="flex-1">
                Fechar
              </Button>
            </DialogClose>
            <Button className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
