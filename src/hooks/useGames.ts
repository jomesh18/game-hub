import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  name: string;
  id: number;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (gameQuery: GameQuery) => {
  return useData<Game>("/games", { params: gameQuery }, [gameQuery]);
};

export default useGame;
