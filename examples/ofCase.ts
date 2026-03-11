import { ofCase } from "@await-of/of";

async function fetchData(id: number): Promise<string> {
  return `Data for ID ${id}`;
}

(async () => {
  // Configured promise wrapper
  const [data, error] = await ofCase<string>(fetchData(1), {
    timeout: 50,
    retries: 2,
    error: new Error("Custom fallback error"),
  });

  if (error) {
    console.error("Fetch failed:", error.message);
  } else {
    console.log("Fetched data:", data);
  }
})();
