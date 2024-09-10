import { CheckCircle2 } from 'lucide-react'
interface GoalProps {
  tarefa: string
}
export function Goal(props: GoalProps) {
  const { tarefa } = props
  return (
    <li className="flex items-center gap-2">
      <CheckCircle2 className="size-4 text-pink-500" />
      <span className="text-sm text-zinc-400">
        Você completou "<span className="text-zinc-100">{tarefa}</span>" às{' '}
        <span className="text-zinc-100">08:13h</span>
      </span>
    </li>
  )
}
