import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { Listbox } from "@headlessui/react";

const themes = [
  { name: "Theme 1 (Light)", value: "theme1" },
  { name: "Theme 2 (Dark)", value: "theme2" },
  { name: "Theme 3 (Colorful)", value: "theme3" },
];

function ThemeSelector({ theme, changeTheme }) {
  const [selected, setSelected] = useState(
    themes.find((t) => t.value === theme)
  );

  const handleChange = (val) => {
    setSelected(val);
    changeTheme(val.value);
  };

  return (
    <Listbox value={selected} onChange={handleChange}>
      <div className="relative">
        <Listbox.Button className="w-full rounded-md border border-gray-300 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {selected.name}
        </Listbox.Button>
        <Listbox.Options className="absolute mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-md z-10">
          {themes.map((t) => (
            <Listbox.Option
              key={t.value}
              value={t}
              className={({ active }) =>
                `px-4 py-2 cursor-pointer ${
                  active
                    ? "bg-blue-100 dark:bg-blue-600 text-blue-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              {t.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* App Name */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          My Themed App
        </div>

        {/* Nav - Desktop */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 text-sm font-medium gap-6">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        {/* Right - Theme + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Selector - Desktop */}
          <div className="hidden md:block w-48">
            <ThemeSelector theme={theme} changeTheme={changeTheme} />
          </div>

          {/* Hamburger - Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 dark:text-white md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 animate-fade-in-down">
          <nav className="flex flex-col gap-3 text-sm font-medium mb-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          {/* Theme Selector - Mobile */}
          <div className="w-full">
            <ThemeSelector
              theme={theme}
              changeTheme={(val) => {
                changeTheme(val);
                setMenuOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
