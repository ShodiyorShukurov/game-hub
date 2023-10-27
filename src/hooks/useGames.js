import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClient
      .get("/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return{
    games
  }
};

export default useGames;
