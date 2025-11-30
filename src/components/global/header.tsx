import React from "react";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className="p-4 flex items-center justify-end">
      <ThemeToggle />
    </header>
  );
};

export default Header;
