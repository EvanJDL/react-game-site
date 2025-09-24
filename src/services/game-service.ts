import axios from "axios";

export default async function fetchAllGames() {
  const res = await axios.get("/api/games", {
    params: { platform: "pc" },
  });
  return res.data;
}
