import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex h-screen max-w-80 grow flex-row rounded-lg bg-secondary">
      <div className="mx-auto flex flex-col items-center justify-between p-3">
        <Link to="/" className="rounded bg-tertiary px-2 font-dongle text-3xl">
          GRIND IT
        </Link>
      </div>
      <div className="my-10 w-1 rounded bg-quaternary" />
    </nav>
  );
}

export default Navbar;
