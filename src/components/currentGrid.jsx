import '../styles/currentgrid.css'

export function CurrentGrid(props){
    return(
      <div className='container-grid'>
        <img className='img-grid' src={require(`../resources/current-${props.image}.jpg`)} alt='Imagen'/>
        <div className='container-text-grid'>
          <p className='nombre-grid'><strong>{props.nombre}</strong></p>
          <p className='texto-grid'>{props.texto}</p>
        </div>
      </div>
    );
}