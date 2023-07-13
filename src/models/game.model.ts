export interface IGame {
  id: number;
  name: string;
  background_image: string;
}

export interface IGamesResponse {
  count: number;
  results: [];
}
