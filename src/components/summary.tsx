import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { DayWeeek } from './day-week'
import { getSummary } from '../http/get-summary'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'
import { PendingGoals } from './pedding-goals'

dayjs.locale(ptBR);

export function Summary() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,//60 seconds
  })

  if(!data) {
    return null;
  }

  const firstDayOfWeek = dayjs().startOf("week").format("D MMM");
  const endDayOfWeek = dayjs().endOf("week").format("D MMM");

  const completedPercentage = Math.round(data.completed * 100 / data.total);

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">{firstDayOfWeek}</span>
          -
          <span className="text-lg font-semibold capitalize">{endDayOfWeek}</span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={data?.completed ?? 0} max={data?.total ?? 0}>
          <ProgressIndicator
            style={{
              width: `${completedPercentage}%`,
            }}
          />
        </Progress>

        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">{data?.completed ?? 0}</span> de{' '}
            <span className="text-zinc-100">{data?.total ?? 0}</span> metas nessa semana.
          </span>
          <span>{completedPercentage}%</span>
        </div>
      </div>

      <Separator />

      <PendingGoals />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        {
          data && Object.entries(data.goalsPerDay)
          .map(([ date, goals ]) => <DayWeeek 
            key={date} 
            date={date}
            goals={goals}
          />)
        }
      </div>
    </div>
  )
}

