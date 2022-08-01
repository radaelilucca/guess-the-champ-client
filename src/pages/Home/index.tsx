import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center text-primary p-8 pt-10  h-full">
      <img src="/images/lol-logo.png" className="h-[112px] mb-[72px]" />

      <h1 className="text-[56px] font-poppins font-bold text-left w-full">
        Hue Who is
      </h1>
      <h5 className="text-[24px]">A League of Legends guessing game!</h5>

      <p className="mt-[100px] font-light text-[24px]">
        Guess who is the champion according to their skills or synopsis.
      </p>

      <Link
        to="/game"
        className="font-semibold text-[2rem] text-darkBackground bg-primary p-5 w-[100%] hover:bg-secondary flex items-center justify-center mt-[100px] rounded-md"
      >
        Play
      </Link>
      <address className="mt-[auto]">
        Made with 💛 by{" "}
        <a href="https://www.linkedin.com/in/luccaradaeli" target="_blank">
          Lucca Radaeli!
        </a>
      </address>
    </div>
  );
};

export { HomePage };
