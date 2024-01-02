import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggler";
import SearchInput from "./search-input";
import GenreDropdown from "./genre-dropdown";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 items-center justify-between flex p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src={"/images/disney-logo2.png"}
          alt="Disney logo"
          width={120}
          height={100}
          className="cursor-poiner invert-0 dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
