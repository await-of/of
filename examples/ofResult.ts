import { ofResult } from "@await-of/of";

interface Config {
  theme: "light" | "dark";
}

async function loadConfig(): Promise<Config> {
  // Simulate potential load failure
  throw new Error("Config file not found");
}

(async () => {
  // Return the default result if the task fails
  const config = await ofResult(loadConfig(), { theme: "light" });
  console.log("Loaded theme:", config.theme); // "light"

  // Example of success
  const successfulConfig = await ofResult(Promise.resolve({ theme: "dark" }), { theme: "light" });
  console.log("Successful theme:", successfulConfig.theme); // "dark"
})();
