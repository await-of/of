import { ofError } from "@await-of/of";

async function runTask() {
  // Simulate task that might fail
  throw new Error("Critical failure");
}

(async () => {
  // Get only the error from the task
  const err = await ofError(runTask());
  if (err) {
    console.error("Task failed with error:", err.message);
  } else {
    console.log("Task completed successfully.");
  }

  // Override the error message
  const customErr = await ofError(Promise.reject(new Error("Original error")), "A more descriptive error message");
  if (customErr) {
    console.error("Custom error message:", customErr.message);
  }
})();
