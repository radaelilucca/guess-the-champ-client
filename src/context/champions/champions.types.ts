import { data as championsData } from "../../data/champions.json";

const champions = Object.values(championsData);


export type ChampionsContextType = {
  champions: typeof champions;
  getChampionData: ({
    championId,
  }: {
    championId: string;
  }) => Promise<ChampionDataType | undefined>;
  getRandomChampionId: () => string;
};

export interface IChampionsProviderProps {
  children: React.ReactNode;
}


export interface ChampionDataType {
  id:          string;
  key:         string;
  name:        string;
  title:       string;
  image:       Image;
  skins:       Skin[];
  lore:        string;
  blurb:       string;
  allytips:    string[];
  enemytips:   string[];
  tags:        string[];
  partype:     string;
  info:        Info;
  stats:       { [key: string]: number };
  spells:      Spell[];
  passive:     Passive;
  recommended: any[];
}

export interface Image {
  full:   string;
  sprite: string;
  group:  string;
}

export interface Info {
  attack:     number;
  defense:    number;
  magic:      number;
  difficulty: number;
}

export interface Passive {
  name:        string;
  description: string;
  image:       Image;
}

export interface Skin {
  id:      string;
  num:     number;
  name:    string;
  chromas: boolean;
}

export interface Spell {
  id:           string;
  name:         string;
  description:  string;
  tooltip:      string;
  leveltip:     Leveltip;
  maxrank:      number;
  cooldown:     number[];
  cooldownBurn: string;
  cost:         number[];
  costBurn:     string;
  datavalues:   Datavalues;
  effect:       Array<number[] | null>;
  effectBurn:   Array<null | string>;
  vars:         any[];
  costType:     string;
  maxammo:      string;
  range:        number[];
  rangeBurn:    string;
  image:        Image;
  resource:     string;
}

export interface Datavalues {
}

export interface Leveltip {
  label:  string[];
  effect: string[];
}