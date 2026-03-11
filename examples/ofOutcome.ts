import { ofOutcome } from "@await-of/of";

async function getScore(user: string): Promise<number> {
  if (user === "admin") return 1000;
  throw new Error("Access denied");
}

(async () => {
  // Successful outcome
  const outcome1 = await ofOutcome(getScore("admin"));
  if (typeof outcome1 === "number") {
    console.log("Admin score:", outcome1); // 1000
  }

  // Failing outcome
  const outcome2 = await ofOutcome(getScore("guest"));
  if (outcome2 instanceof Error) {
    console.error("Guest error:", outcome2.message); // "Access denied"
  } else {
    console.log("Guest score:", outcome2);
  }
})();
