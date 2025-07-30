import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Header() {
  const { theme, changeTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full flex flex-col md:flex-row justify-between items-center px-4 py-3 shadow-md z-50 bg-white dark:bg-gray-900 gap-2 md:gap-0">
      <div className="text-xl font-bold">  My Themed App</div>

      {/* Navigation Links */}
      <nav className="flex gap-4 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-600 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>
      </nav>

      {/* Theme Dropdown */}
      <select
        value={theme}
        onChange={(e) => changeTheme(e.target.value)}
        className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
      >
        <option value="theme1">Theme 1 (Light)</option>
        <option value="theme2">Theme 2 (Dark)</option>
        <option value="theme3">Theme 3 (Colorful)</option>
      </select>
    </header>
  );
}

export default Header;
