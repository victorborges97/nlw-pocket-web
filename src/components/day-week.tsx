import { CheckCircle2 } from 'lucide-react'
import { Goal } from './goal'
interface DayWeeekProps {
  dayWeek: string
}
export function DayWeeek(props: DayWeeekProps) {
  const { dayWeek } = props
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="font-medium">
          {dayWeek}{' '}
          <span className="text-zinc-400 text-sm">(10 de Agosto)</span>
        </h3>
      </div>

      <ul className="flex flex-col gap-3">
        <Goal tarefa="Acordar cedo" />
        <Goal tarefa="Jogar bola" />
        <Goal tarefa="Nadar" />
      </ul>
    </>
  )
}
