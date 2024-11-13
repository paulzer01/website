import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex gap-5">
      <Link
        className="text-lg hover:underline"
        href="https://github.com/paulzer01/"
        target="_blank"
      >
        GitHub
      </Link>
      <Link
        className="text-lg hover:underline"
        href="https://newsletter.uncracked.dev/"
        target="_blank"
      >
        Newsletter
      </Link>
    </header>
  );
};

export default Header;
