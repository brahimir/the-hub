// Models
import { IGenre } from "./genre.model";
import { IPlatform } from "./platform.model";

export interface IGameQuery {
  genre: IGenre | undefined;
  platform: IPlatform | undefined;
  sortOrder: string;
}

export interface IGamesResponse {
  count: number;
  results: [];
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
}
