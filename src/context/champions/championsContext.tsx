import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import { data as championsData } from "../../data/champions.json";
import {
  ChampionDataType,
  ChampionsContextType,
  IChampionsProviderProps,
} from "./champions.types";
import { getRandomNumberInRange } from "../../utils";

const STORAGE_CHAMPS_CACHE_KEY = "champions-cache";

const ChampionsContext = createContext<ChampionsContextType | null>(null);

const ChampionsProvider = ({ children }: IChampionsProviderProps) => {
  const champions = Object.values(championsData);
  // const [championsCache, setChampionsCache] = useState<ChampionDataType[]>([]);

  const getChampionData = async ({
    championId,
  }: {
    championId: string;
  }): Promise<ChampionDataType | undefined> => {
    const URL = `http://ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion/${championId}.json`;

    // const cachedChampion = championsCache.find(
    //   (championItem) => championItem.id === championId
    // );

    // if (cachedChampion) return cachedChampion;

    try {
      const { data } = await axios.get(URL);

      const championData: ChampionDataType = data.data[championId];

      if (championData) {
        // setChampionsCache((prev) => [...prev, championData]);

        return championData;
      }
    } catch (error) {
      console.error("ERROR ON GET CHAMPION DATA =>", error);
    }
  };

  const getRandomChampionId = () => {
    const randomIndex = getRandomNumberInRange({
      min: 0,
      max: champions.length - 1,
    });

    const championId = champions[randomIndex].id;

    return championId;
  };

  // useEffect(() => {
  //   const storedCache = localStorage.getItem(STORAGE_CHAMPS_CACHE_KEY);

  //   if (storedCache) {
  //     const jsonCache: ChampionDataType[] = JSON.parse(storedCache);
  //     setChampionsCache(jsonCache);

  //     // console.log({ loadedCache: storedCache, jsonCache });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (championsCache.length) {
  //     localStorage.setItem(
  //       STORAGE_CHAMPS_CACHE_KEY,
  //       JSON.stringify(championsCache)
  //     );
  //   }
  // }, [championsCache]);

  const values = useMemo(
    () => ({
      champions,
      getChampionData,
      getRandomChampionId,
    }),
    [getChampionData, getRandomChampionId]
  );

  useEffect(() => {
    console.log("VALUES CHANGED", values);
  }, [values]);

  return (
    <ChampionsContext.Provider value={values}>
      {children}
    </ChampionsContext.Provider>
  );
};

export { ChampionsContext, ChampionsProvider };
