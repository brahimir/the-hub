export interface IGenresResponse {
  count: number;
  results: IGenre[];
}

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}
