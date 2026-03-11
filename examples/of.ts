import { of } from "@await-of/of";

interface User {
  id: number;
  name: string;
}

const fetchUserData = async (): Promise<User> => {
  // Simulate successful data fetching
  return { id: 1, name: "John Doe" };
};

const fetchFailingData = async (): Promise<User> => {
  // Simulate an API error
  throw new Error("API is down");
};

(async () => {
  // Successful data fetching scenario
  const [user, error] = await of(fetchUserData());
  if (user) {
    console.log("Fetched user:", user.name);
  } else {
    console.error("Failed to fetch user:", error);
  }

  // Failing data fetching scenario
  const [data, apiError] = await of(fetchFailingData());
  if (apiError) {
    console.error("API error handled gracefully:", apiError.message);
  } else {
    console.log("Data:", data);
  }
})();
