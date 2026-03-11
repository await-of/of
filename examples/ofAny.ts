import { ofAny } from "@await-of/of";

async function greet(name: string): Promise<string> {
  return `Hello, ${name}!`;
}

function* generator(value: string) {
  yield value;
}

(async () => {
  // Call an async function with arguments
  const [message, error] = await ofAny<string>(greet, ["World"]);
  if (!error) {
    console.log(message); // "Hello, World!"
  } else {
    console.error("Error occurred:", error);
  }

  // Use a generator function
  const [genValue] = await ofAny<string>(generator, ["Mark"]);
  console.log("Generator yield:", genValue); // "Mark"

  // Handle failure with a default value
  const failingFunction = () => {
    throw new Error("Boom");
  };
  const [result, err] = await ofAny<string, string>(failingFunction, [], "Safe Default");
  console.log("Result with default:", result); // "Safe Default"
  console.error("Original error:", err.message); // "Boom"
})();
