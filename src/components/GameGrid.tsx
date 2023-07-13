// React
import { useEffect, useState } from "react";
// Models
import { IGame, IGamesResponse } from "../models/game.model";
// API
import { AxiosError } from "axios";
import apiClient from "../services/apiClient";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const [games, setGames] = useState<IGame[] | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await apiClient.get<IGamesResponse>("/games");
      if (!response) {
        // TODO - error snackbar
      }

      setGames(response.data.results);
    } catch (error) {
      setError((error as AxiosError).message);
      console.error(error);
    }
  };

  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}

      <ul>{games && games.map((game) => <li key={game.id}>{game.name}</li>)}</ul>
    </>
  );
};

export default GameGrid;
