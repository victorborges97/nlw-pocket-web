import dayjs from 'dayjs'
import { CheckCircle2 } from 'lucide-react'
interface GoalProps {
  tarefa: any
}
export function Goal(props: GoalProps) {
  const { tarefa } = props
  const time = dayjs(tarefa.completedAt).format("HH:mm[h]");
  return (
    <li className="flex items-center gap-2">
      <CheckCircle2 className="size-4 text-pink-500" />
      <span className="text-sm text-zinc-400">
        Você completou "<span className="text-zinc-100">{tarefa.title}</span>" às{' '}
        <span className="text-zinc-100">{time}</span>
      </span>
    </li>
  )
}
