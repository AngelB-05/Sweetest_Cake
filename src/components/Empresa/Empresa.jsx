import {
  useAnimation,
  useInView,
  motion,
  useTransform,
  useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

import "./Empresa.css";

export const Empresa = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Offset corregido (ajusta según necesites)
  });

  const paragraphOne = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"]);
  const paragraphTwo = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section ref={containerRef} id="empresa">
      <motion.h2
        className="empresa-titulo"
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{ delay: 0.3 }}
      >
        Empresa
      </motion.h2>
      <motion.p style={{ x: paragraphOne }}>
        {" "}
        {/* Cambiado translateX por x */}
        En Sweetest Cake, no solo horneamos pasteles,{" "}
        <span className="primerTexto">
          ¡creamos experiencias inolvidables!
        </span>{" "}
        Cada bocado es una explosión de{" "}
        <span className="segundoTexto">frescura, sabor y calidad,</span>{" "}
        diseñado para endulzar tus momentos más especiales.
      </motion.p>
      <motion.p style={{ x: paragraphTwo }}>
        {" "}
        Déjanos endulzar tus momentos especiales y crear experiencias que
        brillen con nuestros productos artesanales 100% frescos.
        <br />
        <span className="tercerTexto">
          ¡Ordénalo ahora y vive la magia de Sweetest Cake!
        </span>
      </motion.p>
    </section>
  );
};
