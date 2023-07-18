// React
import { useEffect, useState } from "react";
// Models
import { IGameQuery } from "./../models/game.model";
import { IGame, IGamesResponse } from "../models/game.model";
// API
import { AxiosError, AxiosRequestConfig } from "axios";
import apiClient from "../services/apiClient";
// ChakraUI
import { useToast } from "@chakra-ui/react";

const useGames = (gameQuery: IGameQuery) => {
  const [isLoading, setIsLoading] = useState(false);

  const [games, setGames] = useState<IGame[] | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const toast = useToast();

  useEffect(() => {
    fetchGames();
  }, [gameQuery]);

  const fetchGames = async () => {
    setIsLoading(true);

    const axiosConfig: AxiosRequestConfig = {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    };

    try {
      const response = await apiClient.get<IGamesResponse>("/games", axiosConfig);
      if (!response) {
        toast({
          title: `Request failed.`,
          description: "There was an error fetching games. Please try again.",
          status: "error",
          duration: 9000,
          isClosable: true
        });
      }

      setGames(response.data.results);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
      toast({
        title: `${error.message}`,
        description: "There was an error fetching games. Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { games, error, isLoading };
};

export default useGames;
