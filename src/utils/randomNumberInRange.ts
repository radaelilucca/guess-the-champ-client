interface Props {
  min: number;
  max: number;
}

const getRandomNumberInRange = ({ min, max }: Props) => {
  return Math.round(Math.random() * (max - min) + min);
};

export { getRandomNumberInRange };
