import { useContext } from "react";
import ReactSelect from "react-select";
import {
  ChampionsContext,
  ChampionsContextType,
} from "../../context/champions";

import { GameContextType } from "../../context/game/game.types";
import { GameContext } from "../../context/game/gameContext";

import "./index.css";

const GameView = () => {
  const { startGame, gameState } = useContext(GameContext) as GameContextType;
  const { champions } = useContext(ChampionsContext) as ChampionsContextType;

  const handleGetRandomChampion = async () => {
    startGame();
  };

  const championsOptions = champions.map(({ name }) => ({
    value: name,
    label: name,
  }));

  return (
    <div className="text-lightText p-8 flex flex-col items-center relative h-full font-poppins">
      <button
        type="button"
        disabled
        className="absolute top-6 right-6 bg-primary h-[38px] w-[38px] flex items-center justify-center rounded-lg hover:bg-tertiary transition-all disabled:bg-gray-500"
      >
        <img src="/icons/tip-icon.svg" />
      </button>
      <h1 className="text-primary font-medium text-[2.5rem] text-center mt-[32px]">
        Which champion has this abillity?
      </h1>

      <div className="min-h-[168px] mt-[40px] flex items-center">
        <img
          src="https://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/AatroxQ.png"
          alt="champion spell"
          className="h-[82px] w-[82px] border-primary border-[2px]"
        />
      </div>

      <ReactSelect
        options={championsOptions}
        className="champ-select"
        classNamePrefix="champ-select"
      />

      <div className="flex flex-col w-full mt-[30px]">
        <h5 className="align-self-start text-[24px]">Your scores:</h5>

        <div className="flex flex-col rounded-md bg-red-300">
          <div className="min-h-[60px] p-2 flex items-center justify-between bg-[#FFDCB7] text-darkText">
            <div className="flex flex-col gap-1">
              <strong className="text-[1.5rem] font-medium text-[#41414D]">
                First try:
              </strong>
              <span>3 hits</span>
            </div>
            <div className="flex">
              <img src="public/icons/star-icon.svg" />
              <img src="public/icons/star-icon.svg" />
              <img src="public/icons/star-icon.svg" />
            </div>
          </div>

          <div className="min-h-[60px] p-2 flex items-center justify-between rounded">
            <div className="flex flex-col gap-1">
              <strong className="text-[1.5rem] font-medium text-[#41414D]">
                First try:
              </strong>
              <span>3 hits</span>
            </div>
            <div className="flex">
              <img src="public/icons/star-icon.svg" />
              <img src="public/icons/star-icon.svg" />
              <img src="public/icons/star-icon.svg" />
            </div>
          </div>

          <div className="min-h-[60px] p-2 flex items-center justify-between rounded">
            <div className="flex flex-col gap-1">
              <strong className="text-[1.5rem] font-medium text-[#41414D]">
                First try:
              </strong>
              <span>3 hits</span>
            </div>
            <div className="flex">
              <img src="public/icons/star-icon.svg" />
              <img src="public/icons/star-icon.svg" />
              <img src="public/icons/star-icon.svg" />
            </div>
          </div>

          <div className="min-h-[60px] p-2 flex items-center justify-center rounded">
            <strong className="text-[1.5rem] font-medium text-[#41414D]">
              Total failures: 3
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GameView };
