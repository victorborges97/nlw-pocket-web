export interface Goal {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}

type PedingGoalsResponse = Goal[];

export async function getPedingGoals(): Promise<PedingGoalsResponse> {
    const response = await fetch("http://localhost:3333/pending-goals");
    const data = await response.json();
    return data.pendingGoals;
}
