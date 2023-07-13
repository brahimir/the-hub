import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games } = useGames();

  return <ul>{games && games.map((game) => <li key={game.id}>{game.name}</li>)}</ul>;
};

export default GameGrid;
