import "./Banner.css";
import { ParallaxBanner } from "react-scroll-parallax";

export const Banner = () => {
  return (
    <ParallaxBanner
      layers={[{ image: "/assets/banner_inicio.webp", speed: -35 }]}
      style={{ height: "540px" }}
    >
      <div className="contenedor_nombre">
        <h1 className="nombre">Sweetest Cake</h1>
      </div>
    </ParallaxBanner>
  );
};
