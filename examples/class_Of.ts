import { Of } from "@await-of/of";

async function fetchData(): Promise<string> {
  return "Static method data";
}

(async () => {
  // Using static Of.case (alias for ofCase)
  const [data, _error] = await Of.case(fetchData(), { timeout: 100 });
  if (data) {
    console.log("Fetched with Of.case:", data);
  }

  // Using static Of.outcome (alias for ofOutcome)
  const result = await Of.outcome(Promise.reject(new Error("Failed")));
  if (result instanceof Error) {
    console.error("Caught error via Of.outcome:", result.message);
  }

  // Using static Of.sync (alias for ofSync)
  const [parsed, syncError] = Of.sync(JSON.parse, ['{"key": "value"}']);
  if (parsed && !syncError) {
    console.log("Parsed via Of.sync:", parsed.key);
  }

  // Using static Of.async (alias for of)
  const [asyncData, _asyncError] = await Of.async(fetchData());
  if (asyncData) {
    console.log("Async data:", asyncData);
  }
})();
