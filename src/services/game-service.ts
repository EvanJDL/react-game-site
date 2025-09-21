import apiClient from "./api-client";

async function fetchAllGames() {
  const res = await apiClient.get("/games", {
    params: { platform: "pc" },
  });
  console.log(res.data);
  return res.data;
}

export default fetchAllGames;
