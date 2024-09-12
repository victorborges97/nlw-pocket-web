import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPedingGoals, Goal } from "../http/get-pending-goals";
import { createGoalCompletion } from "../http/create-goal-completion";
import { useState } from "react";

export function PendingGoals() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["pedding-goals"],
    queryFn: getPedingGoals,
    staleTime: 1000 * 60, //60 seconds
  });

  if (!data) {
    return null;
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId);
    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pedding-goals"] });
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map((pending) => {
        return (
          <PendingGoal
            key={pending.id}
            pending={pending}
            handle={handleCompleteGoal}
          />
        );
      })}
    </div>
  );
}

interface PendingGoal {
  pending: Goal
  handle: (goalId: string) => Promise<void>
}
function PendingGoal(props: PendingGoal) {
  const { handle, pending } = props;
  const [loading, setLoading] = useState(false);
  async function handleCompleteGoal() {
    try {
      setLoading(true);
      await handle(pending.id);
    } finally {
      setLoading(false);
    }
  }
  return (
    <OutlineButton
      onClick={() => handleCompleteGoal()}
      disabled={
        loading || pending.completionCount >= pending.desiredWeeklyFrequency
      }
      key={pending.id}
    >
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <Plus className="size-4 text-zinc-600" /> {pending.title}
        </>
      )}
    </OutlineButton>
  );
}
