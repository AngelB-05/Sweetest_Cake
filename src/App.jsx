import { Productos } from "./components/Productos/Productos";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Empresa } from "./components/Empresa/Empresa";
import { Carrusel } from "./components/Carrusel/Carrusel";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

export function App() {
  // const [opacity, setOpacity] = useState(1);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const newOpacity = Math.max(0.2, 1 - scrollY / 500);
  //     setOpacity(newOpacity);
  //     document.body.style.setProperty("--opacity", newOpacity); // Actualiza CSS variable
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <ParallaxProvider>
        <Header />
        <Banner />
        <Carrusel />
        <Empresa />
        <Productos />
      </ParallaxProvider>
    </>
  );
}
