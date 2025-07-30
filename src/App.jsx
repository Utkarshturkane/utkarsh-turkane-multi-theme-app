import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <main className="pt-20 px-4">
          <Routes>
            <Route path="https://utkarshturkane.github.io/utkarsh-turkane-multi-theme-app/" element={<Home />} />
            <Route path="https://utkarshturkane.github.io/utkarsh-turkane-multi-theme-app/about" element={<About />} />
            <Route path="https://utkarshturkane.github.io/utkarsh-turkane-multi-theme-app/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
export default App;
