import "./Producto.css";

export const Producto = ({ nombre, imagen, descripcion, precio }) => {
  return (
    <div className="tarjeta">
      <p className="nombre">{nombre}</p>
      <img src={imagen} alt={nombre} />
      <p>{descripcion}</p>
      <p className="precio">
        <span>Precio:</span> Q{precio.toFixed(2)}
      </p>
    </div>
  );
};
