import { ofAnyCase } from "@await-of/of";

async function unstableOperation(): Promise<string> {
  if (Math.random() < 0.5) {
    throw new Error("Temporary failure");
  }
  return "Successful operation";
}

(async () => {
  // Retry strategy
  const [result, error] = await ofAnyCase<string>(unstableOperation, { retries: 3 });
  if (error) {
    console.error("Operation failed after 3 retries:", error);
  } else {
    console.log("Operation result:", result);
  }

  // Timeout example
  const longRunningTask = new Promise<string>((resolve) => setTimeout(() => resolve("Finished"), 1000));
  const [taskResult, timeoutError] = await ofAnyCase<string>(longRunningTask, { timeout: 100 });
  if (timeoutError) {
    console.warn("Task timed out:", timeoutError.message); // "Timeout: 100ms"
  } else {
    console.log("Task result:", taskResult);
  }
})();
