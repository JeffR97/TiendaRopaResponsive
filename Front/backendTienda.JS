// cartas de inicio
// const cardsContainer = document.querySelector(".container-muestras");

// cardsContainer.addEventListener("click", (e) => {
//   const target = e.target.closest(".card");

//   if (!target) return;

//   cardsContainer.querySelectorAll(".card").forEach((card) => {
//     card.classList.remove("active");
//   });

//   target.classList.add("active");
// });

// sección con React
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// Lista de productos para la demostración
const productos = [
    { id: 1,img:"../imagenes/ropahombre/bu2.png", nombre: 'buso de hombre.', precio:150000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 2,img:"../imagenes//ropahombre/bu1.png", nombre: 'buso rojo hombre.', precio:150000,stock:4 , categoria:"ropa-hombre"},
    { id: 3,img:"../imagenes/ropahombre/b1.jpeg", nombre: 'boxer en 3 colores disponibles.', precio:50000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 4,img:"../imagenes/ropahombre/c1.jpeg"  ,nombre: 'camiseta 4 colores disponibles.' ,precio:80000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 5,img:"../imagenes/ropahombre/c2.jpeg" ,nombre:'buso rojo hombre.' ,precio:85000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 6,img:"../imagenes/ropahombre/c3.jpeg" ,nombre:'camiseta New york.' ,precio:80000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 7,img:"../imagenes/ropahombre/c4.jpeg",nombre:'camiseta, solo en negro.' ,precio: 150000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 8,img:"../imagenes/ropahombre/cha1.jpeg" ,nombre:'cortavientos semicamuflada.' ,precio:100000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 9,img:"../imagenes/ropahombre/cha2.jpeg" ,nombre:'chaqueta, solo en negro.' ,precio:120000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 10,img:"../imagenes/ropahombre/cha4.png" ,nombre:'chaqueta yahama.' ,precio:150000,stock:4 , categoria:"ropa-hombre"},
    { id: 11,img:"../imagenes/ropahombre/cha3.jpeg" ,nombre:'chaqueta camuflado azul.',precio:130000,stock:4 , categoria:"ropa-hombre"},
    { id: 12 , img:"../imagenes/ropahombre/g1.png" , nombre:'gorras SD 3 colores disponibles.' , precio:40000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 13, img:"../imagenes/ropahombre/z1.jpeg" , nombre:'tennis nike' , precio: 120000,stock:4 , categoria:"ropa-hombre"},
    { id: 14, img:"../imagenes/ropahombre/z2.jpeg" , nombre:'tennis adidas' , precio:180000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 15, img:"../imagenes/ropahombre/z3.jpeg" , nombre:'tennis nike' , precio:150000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 16, img:"../imagenes/ropahombre/z4.jpeg" , nombre:'tennis nike' , precio:150000 ,stock:4 , categoria:"ropa-hombre"},
    { id: 17, img:"../imagenes/ropahombre/z5.jpeg" , nombre:'botas under armour.' , precio:200000 ,stock:4 , categoria:"ropa-hombre"},

    // --------------------------------------------------------------------------------------------------------

    { id:402, img:"../imagenes/ropamujer/chaquetaJean.jpeg", nombre:'Chaqueta en jean.', precio:210000 ,stock:5 , categoria:"ropa-mujer"},
    { id:403, img:"../imagenes/ropamujer/conjuntoazul.jpeg ", nombre:'Conjunto en ceda.', precio: 12000 , stock:5 , categoria:"ropa-mujer"},
    { id:404, img:"../imagenes/ropamujer/deportivomujer.png ", nombre:'Deportivo', precio:115000 , stock:5 , categoria:"ropa-mujer"},
    { id:405, img:"../imagenes/ropamujer/bolsoAdidasRosa.jpeg ", nombre:'Bolso adidas rosado.', precio: 13000 , stock:5 , categoria:"ropa-mujer"},
    { id:406, img:"../imagenes/ropamujer/bolsoNikeRojo.jpeg ", nombre:'Bolso nike rojo.', precio:142000 , stock:5 , categoria:"ropa-mujer"},
    { id:407 , img:"../imagenes/ropamujer/busorosa.png" , nombre:'Buso de cuello' , precio:70000 , stock:5 , categoria:"ropa-mujer"},
    { id:408, img:"../imagenes/ropamujer/chaquetaCuerina.jpeg" , nombre:'Chaqueta de cuerina.' , precio:80000 , stock:5 , categoria:"ropa-mujer"},
    { id:409 , img:"../imagenes/ropamujer/pantalonCamuflado.jpeg" , nombre:'Sudadera camuflada.' , precio:80000 , stock:5 , categoria:"ropa-mujer"},
    { id:410 , img:"../imagenes/ropamujer/tenis.png" , nombre:'Force one' , precio:160000 , stock:5 , categoria:"ropa-mujer"},
    { id:411 , img:"../imagenes/ropamujer/TenisAdidasNegro.jpeg" , nombre:'Adidas' , precio:150000 , stock:5 , categoria:"ropa-mujer"},
    { id:412 , img:"../imagenes/ropamujer/busomujer.png" , nombre:'Buso unico color.' , precio:120000 , stock:5 , categoria:"ropa-mujer"},

    // --------------------------------------------------------------------------------------------------------

    { id:800 , img:"../imagenes/" , nombre:'buso.' , precio:120000 ,stock:5 , categoria:"ropa-niño"},
    // --------------------------------------------------------------------------------------------------------

    { id:1200 , img:"../imagenes/accesorios/acc1.jpeg" , nombre:'Evilla para niña, Precio por unidad' , precio:2000 , stock:3 , categoria:"accesorios"},
    { id:1201 , img:"../imagenes/accesorios/acc2.jpeg" , nombre:'Correa de hombre en cuero.' , precio:50000, stock:3 , categoria:"accesorios"},
    { id:1202 , img:"../imagenes/accesorios/acc3.jpeg" , nombre:'Maquillaje para mujer, Precio por unidad' , precio:10000 , stock:3 , categoria:"accesorios"},
    { id:1203 , img:"../imagenes/accesorios/acc4.jpeg" , nombre:'Brillo para niña, Precio por unidad' , precio:8000, stock:3 , categoria:"accesorios"},
];


// const proHombre = productos.filter(producto => producto.id >= 1 && producto.id < 400);
// const proMujer = productos.filter(producto => producto.id >= 400 && producto.id < 800);
// const proNiño = productos.filter(producto => producto.id >= 800 && producto.id < 1200);
// const proAcce = productos.filter(producto => producto.id >= 1200 && producto.id < 1600);
// Carrito de compras
let lista_carrito = [];

// function renderizarProductos(){
//     const div = document.querySelector(".container-ropa-H");
//     if (!div) {
//         console.error('Elemento no encontrado: .container-ropa');
//         return;
//     }
//     productos.forEach(producto => {
//         const html = `
//             <div class="casi-articulos">
//                 <img class="arti" src="${producto.img}" />
//                 <b class="info-art">
//                 ${producto.nombre}
//                 <br>
//                 ${producto.precio}
//                 </b>
//                 <img src="../imagenes/bag-buy.svg" alt="Añadir al Carrito" class="imgBuy"  onclick="agregarAlCarrito(${producto.id})">
//             </div>  
//         `;
//         div.innerHTML += html;
//     });
// }

// Función para agregar producto al carrito
// function agregarAlCarrito(id) {
//     const producto = productos.find(p => p.id === id);
//     lista_carrito.push(producto);
//     renderizarCarrito();
// }

// Función para renderizar el carrito
// function renderizarCarrito() {
//     const ul = document.getElementById('lista-carrito');
//     ul.innerHTML = '';
//     lista_carrito.forEach((producto, index) => {
//         const html = `
//             <li class="prod-agregado">
//                 <div class="nomCompra">${producto.nombre}  </div>  
//                 <div class="precioCompra"><strong>$${producto.precio}</strong> <img src="../imagenes/delete.svg" alt="imgEliminar" class="imgElimina" onclick="eliminarDelCarrito(${index})"></div>
//             </li>
//         `;
//         ul.innerHTML += html;
//     });
//     calcularTotal();
// }

// Función para calcular el total del carrito
// function CalcularTotal() {
//     const total = lista_carrito.reduce((acc, producto) => acc + producto.precio, 0);
//     document.getElementById('total-carrito').innerText = total;
// }

// Función para eliminar producto del carrito
// function EliminarDelCarrito(index) {
//     lista_carrito.splice(index, 1);
    // renderizarCarrito();
// }

// Evento para vaciar el carrito
// document.getElementById('img-vaciar-carrito').addEventListener('click', () => {
//     lista_carrito = [];
//     renderizarCarrito();
// });


// document.addEventListener('DOMContentLoaded', () => {
//     // renderizarProM();
//     // renderizarProH();
//     // renderizarProN();
//     // renderizarProAcc();
//     renderizarProductos();
// });


// const stilo = 'style="display: block;position:relative;right:160px";'
//evento click carrito
const cont_carrito = document.querySelector(".cont_carrito");
const listaCarrito = document.querySelector(".cont_listaC");


// ***** pasar esta funcion a un estado en react,poner en funcionamiento el carrito de compra y añadirlo en el header

// function mostrarLista(){
//     if (listaCarrito.style.display === 'none' || listaCarrito.style.display === '') {
//         listaCarrito.style.display = 'block';
//         listaCarrito.style.alignSelf = 'flex-start';
//         // justify-items: center; Los atributos los debemos usar en camelCase para que lo lea como JS
//         // align-self: flex-start;
//         // listaCarrito.style.top = '20px';
//         // listaCarrito.style.right = '190px';
//         listaCarrito.style.zIndex = '600';
//     } else {
//         listaCarrito.style.display = 'none';
//     }
    
// };

