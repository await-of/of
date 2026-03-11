import { ofIt } from "@await-of/of";

async function findUserById(id: number): Promise<{ name: string }> {
  if (id === 0) throw new Error("User not found");
  return { name: "Mark" };
}

(async () => {
  // Successful case
  const [user, error] = await ofIt(findUserById(1));
  if (user) {
    console.log("Found user:", user.name);
  }

  // Failure case with a default result
  const [fallbackUser, findError] = await ofIt(findUserById(0), { name: "Guest" });
  if (findError) {
    console.error("Error during find:", findError.message);
  }
  console.log("Resulting user name:", fallbackUser.name); // "Guest"
})();
