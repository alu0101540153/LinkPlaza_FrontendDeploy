import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "w-24" }: LogoProps) {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        className={`block mx-auto ${className}`}
        alt="Logotipo Dev tree"
      />
    </Link>
  );
}
