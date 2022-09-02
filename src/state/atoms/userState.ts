import { atom } from 'recoil';

type UserStateType = {
  id: string;
  username: string;
  isGuest?: boolean;
  scores: {
    total: number;
    oneStar?: number;
    twoStars?: number;
    threeStars?: number;
  };
};

const userStateAtom = atom({
  key: 'userState',
  default: {} as UserStateType,
});

export { userStateAtom };
