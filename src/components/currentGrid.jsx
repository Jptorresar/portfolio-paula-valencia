import "../styles/currentgrid.css";
import { FileDown, SquareArrowOutUpRight } from "lucide-react";

export function CurrentGrid(props) {
  return (
    <div className="container-grid">
      <img
        className="img-grid"
        src={require(`../resources/current-${props.image}.jpg`)}
        alt="Imagen"
      />
      <div className="container-text-grid">
        <p className="nombre-grid">
          <strong>{props.nombre}</strong>
        </p>
        <p className="texto-grid">{props.texto}</p>
        <div className="portfolio-grid-item">
          {props.isDownload ? (
            <FileDown className="portfolio-contact-icon" />
          ) : (
            <SquareArrowOutUpRight className="portfolio-contact-icon" />
          )}
          <a
            href={props.link}
            {...(props.isDownload ? { download: `${props.nombre}.pdf` } : {})} // Condición para habilitar la descarga
            target={props.isDownload ? "_self" : "_blank"} // Abre la descarga en la misma ventana, pero los enlaces en una nueva
            rel={props.isDownload ? undefined : "noopener noreferrer"} // Buenas prácticas para enlaces externos
          >
            {props.linktext}
          </a>
        </div>
      </div>
    </div>
  );
}
