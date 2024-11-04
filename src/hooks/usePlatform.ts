import platform from "../data/platform";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  return { data: platform, error: null };
};

export default usePlatform;
