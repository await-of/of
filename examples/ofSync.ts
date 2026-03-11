import { ofSync } from "@await-of/of";

interface Config {
  theme: string;
}

function parseConfig(json: string): Config {
  return JSON.parse(json);
}

// Successful parsing
const [data, error] = ofSync<Config>(parseConfig, ['{"theme": "dark"}']);
if (error) {
  console.error("Parse failed:", (error as Error).message);
} else if (data) {
  console.log("Parsed theme:", data.theme); // "dark"
}

// Failed parsing
const [invalidData, parseError] = ofSync(parseConfig, ["invalid json"]);
if (parseError) {
  console.error("Gracefully handled parse error:", parseError.message);
}
