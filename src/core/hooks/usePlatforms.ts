// React
import { useEffect, useState } from "react";
// Models
import { IPlatform } from "../models/platform.model";
import { IPlatformsResponse } from "../models/platform.model";
// API
import { AxiosError } from "axios";
import apiClient from "../services/apiClient";
// ChakraUI
import { useToast } from "@chakra-ui/react";

const usePlatforms = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [platforms, setPlatforms] = useState<IPlatform[] | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const toast = useToast();

  useEffect(() => {
    fetchPlatforms();
  }, []);

  const fetchPlatforms = async () => {
    setIsLoading(true);

    try {
      const response = await apiClient.get<IPlatformsResponse>("/platforms/lists/parents");
      if (!response) {
        toast({
          title: `Request failed.`,
          description: "There was an error fetching platforms. Please try again.",
          status: "error",
          duration: 9000,
          isClosable: true
        });
      }

      setPlatforms(response.data.results);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
      toast({
        title: `${error.message}`,
        description: "There was an error fetching platforms. Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { platforms, error, isLoading };
};

export default usePlatforms;
