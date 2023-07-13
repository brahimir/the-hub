// React
import { useEffect, useState } from "react";
// Models
import { IGenre, IGenresResponse } from "../models/genre.model";
// API
import apiClient from "../services/apiClient";
import { AxiosError } from "axios";
// ChakraUI
import { useToast } from "@chakra-ui/react";

const useGenres = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [genres, setGenres] = useState<IGenre[] | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const toast = useToast();

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    setIsLoading(true);

    try {
      const response = await apiClient.get<IGenresResponse>("/genres");
      if (!response) {
        toast({
          title: `Request failed.`,
          description: "There was an error fetching genres. Please try again.",
          status: "error",
          duration: 9000,
          isClosable: true
        });
      }

      setGenres(response.data.results);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
      toast({
        title: `${error.message}`,
        description: "There was an error fetching genres. Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { genres, error, isLoading };
};

export default useGenres;
