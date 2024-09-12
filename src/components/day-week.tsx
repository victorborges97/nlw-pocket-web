import dayjs from 'dayjs'
import { Goal } from './goal'
interface DayWeeekProps {
  date: string
  goals: {
    id: string;
    title: string;
    completedAt: string;
}[]
}
export function DayWeeek(props: DayWeeekProps) {
  const { date, goals } = props
  const weekDay = dayjs(date).format("dddd");
  const formattedDate = dayjs(date).format("D[ de ]MMMM")
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="font-medium">
          <span className='capitalize'>{weekDay}{' '}</span>
          <span className="text-zinc-400 text-sm">({formattedDate})</span>
        </h3>
      </div>

      <ul className="flex flex-col gap-3">
        {
          goals && goals.map((g, index) => 
            <Goal tarefa={g} key={index}/>
          )
        }
      </ul>
    </>
  )
}
