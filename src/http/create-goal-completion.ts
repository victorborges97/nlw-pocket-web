export async function createGoalCompletion(goalId: string) {
  await fetch("http://localhost:3333/completions", {
    method: "POST",
    body: JSON.stringify({
        goalId,
    }),
    headers: {
        "Content-Type": "application/json",
    }
  });
}
