import { data } from "../helper";
import { Producto } from "./Producto";

export const Productos = () => {
  const todosLosProductos = data.map(
    ({ id, nombre, descripcion, imagen, precio }) => (
      <Producto
        key={id}
        nombre={nombre}
        descripcion={descripcion}
        precio={precio}
        imagen={imagen}
      />
    )
  );
  return (
    <>
      <h1 className="nuestrosProductos">NUESTROS PRODUCTOS</h1>
      <div id="productos" className="product-grid">
        {todosLosProductos}
      </div>
    </>
  );
};
