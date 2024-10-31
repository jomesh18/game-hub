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

const useGame = () => {
  return useData<Game>("/games");
};

export default useGame;
