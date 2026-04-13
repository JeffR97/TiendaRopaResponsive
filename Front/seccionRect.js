
// _____________________________________sección con react__________________________________________
// import react from 'react';
// import ReactDom from 'react-dom/client';
// import {EliminarDelCarrito} from './backendTienda.JS';

// import { useState } from "react";

// Componente para un producto individual
function Producto({ producto, agregarAlCarrito }) {
    
    return (
    
        <div className="casi-articulos">
            <img className="arti" src={producto.img} alt={producto.nombre} />
            <b className="info-art">
                {producto.nombre}<br />
                ${producto.precio}
            </b>
            <img
                src="../imagenes/bag-buy.svg"
                alt="Añadir al Carrito"
                className="imgBuy"
                onClick={() => agregarAlCarrito(producto)}
            />
        </div>
    );
}


// Componente principal de la app
function App() {

    const [verLista,setVerLista] = React.useState(false); //Estado para ver lista de carrito
    const [carrito, setCarrito] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    // const [filtros, setfiltros] = React.useState({
    //     categoria: '',
    //     precioMin: 0
    // })
        
    //estado para productos al carrito no funciona aun(añadir un contador de compra para no hacer mas grande la lista)
    const AgregarAlCarrito = (producto) => {
        setTotal(total + producto.precio);

        setCarrito(prevCarrito => {
            const existe = prevCarrito.find(item => item.id === producto.id);
            if (existe){
                return prevCarrito.map(item => item.id === producto.id ? {...item, cantidad: item.cantidad +1} : item);
            }else {
                return[...prevCarrito,{...producto,cantidad: 1}];
            }
        });
        
    };

    const EliminarProducto = (producto) => {
        // eliminar producto del carrito y actualizar el total
        setTotal(prevTotal => prevTotal - producto.precio);

        setCarrito(prevCarrito => {
            const itemEnCarrito = prevCarrito.find(item => item.id === producto.id);
            if (!itemEnCarrito) return prevCarrito;

            return prevCarrito.filter(item => item.id !== producto.id);
        });
    }

    const VaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
    }

//filtrado de productos
    // const filtrosProductos = (productos) => {
    //     return productos.filter(producto => {
    //         return (
    //             producto.precio >= filtros.precioMin && (
    //                 filtros.categoria == "ropa-mujer" 
    //                 || producto.categoria == filtros.categoria
    //             )
    //         )
    //     })
    // }

    // const filtradoProductos = filtrosProductos(productos);

    return (
        
        <div>
            {/* boton de carrito */}
            <div className="cont_carrito" onClick = { () => setVerLista(!verLista)}>
                
                <img  className="img_carrito" 
                src={verLista ? "../imagenes/bottom.svg" : "../imagenes/shoppingcart.png"}
                alt={verLista ? "Ocultar carrito" : "Mostrar carrito"} /> 
                
                {verLista && (
                    
                    <div className="cont_listaC" >
                        <h2 className="titLista">Carrito</h2>
                        <ul id="lista-carrito">
                            {carrito.map(item => (
                                <li className="prod-agregado" key = {item.id}><div>{item.nombre}</div><br/>
                                   <div className="contDataProd">
                                    <span>Cantidad:{item.cantidad}</span>    <span>${item.cantidad * item.precio}</span>
                                    </div>
                                    <div className="contElimina">
                                        <img className="imgElimina" src="../imagenes/delete.svg" title="Eliminar producto" alt="imgEliminar"  onClick={() => EliminarProducto(item)}></img>
                                    </div>
                                </li>
                                
                            ))}
                            <hr/>
                        </ul>
                        <div className="total-list">
                            <strong className="totalC"> Total: $<span id="total-carrito">{total}</span></strong>
                            <img id="img-vaciar-carrito" src="../imagenes/delete-cancel-svgrepo-com.svg" title="Eliminar lista" alt="Vaciar carrito"  onClick={() => VaciarCarrito()}></img>
                        </div>
                    </div>
                        
                )}
            </div>

            {/* mapeo de cada producto en el DOM */}
            <div className="container-ropa-H">
                {productos.map(producto => (
                    <Producto key={producto.id} producto={producto} agregarAlCarrito={AgregarAlCarrito}/>
                ))}
            </div>
            {/* <Producto productos={filtradoProductos} /> */}
        </div>
    );
}

// Renderiza la app en el div #root
const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<App />);


// ReactDOM.render(<App />, document.getElementById('react-root2')); crear este renderizado en otro archivo si no hay otra solución
