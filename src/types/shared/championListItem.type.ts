import { ChampionDataType } from "../champion.type";

export type ChampionListItem = Omit<
  ChampionDataType,
  | "skins"
  | "lore"
  | "blurb"
  | "allytips"
  | "enemytips"
  | "tags"
  | "partype"
  | "info"
  | "stats"
  | "spells"
  | "passive"
>;
