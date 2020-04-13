import React,{useState} from 'react';


const Carrito = () => {
  const [compra, setCompra] = useState(0);

  return ( 
    <div className="">
      <h3>Carrito de compras:</h3>
      <h4>
        <i className="fas fa-shopping-cart"></i>
        <span className="mx-3">
          {compra}
        </span>
      </h4>

    </div>
  );
}
 
export default Carrito;