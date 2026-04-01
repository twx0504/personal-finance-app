import Logo from "../ui/Logo";
import authIllustration from "../../assets/images/illustration-authentication.svg";

const Hero = () => {
  return (
    <div
      className="relative bg-grey-900 w-140 h-[calc(100vh-var(--spacing-400))] p-500 rounded-lg bg-no-repeat min-h-192  max-h-240"
      style={{
        backgroundImage: `url(${authIllustration})`,
      }}
    >
      <div className="absolute top-500 left-500">
        <Logo />
      </div>
      <div className="absolute w-[calc(100%-2*var(--spacing-500))] text-white bottom-500 left-1/2 -translate-x-1/2">
        <h2 className="text-preset-1 mb-300 drop-shadow-sm">
          Keep track of your money <br />
          and save for your future
        </h2>
        <p className="text-preset-4 drop-shadow-sm">
          Personal finance app puts you in control of your spending. Track
          transactions, set budgets, and add to savings pots easily.
        </p>
      </div>
    </div>
  );
};

export default Hero;
