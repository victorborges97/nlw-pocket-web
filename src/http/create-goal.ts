interface CreateGoalRequest {
  title: string;
  desiredWeeklyFrequency: number;
}

export async function createGoal({ desiredWeeklyFrequency, title }: CreateGoalRequest) {
  await fetch("http://localhost:3333/goals", {
    method: "POST",
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
