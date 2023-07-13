// React
import { useEffect, useState } from "react";
// Models
import { IGame, IGamesResponse } from "../models/game.model";
// API
import { AxiosError } from "axios";
import apiClient from "../services/apiClient";
// ChakraUI
import { useToast } from "@chakra-ui/react";

const useGames = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [games, setGames] = useState<IGame[] | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const toast = useToast();

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    setIsLoading(true);

    try {
      const response = await apiClient.get<IGamesResponse>("/games");
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
