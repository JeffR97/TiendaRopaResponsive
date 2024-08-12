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

// Lista de productos para la demostración
const productos = [
    { id: 1,img:"imagenes/ropahombre/bu2.png", nombre: 'buso de hombre.', precio:150000 },
    { id: 2,img:"imagenes//ropahombre/bu1.png", nombre: 'buso rojo hombre.', precio:150000},
    { id: 3,img:"imagenes/ropahombre/b1.jpeg", nombre: 'boxer en 3 colores disponibles.', precio:50000 },
    { id: 4,img:"imagenes/ropahombre/c1.jpeg"  ,nombre: 'camiseta 4 colores disponibles.' ,precio:80000 },
    { id: 5,img:"imagenes/ropahombre/c2.jpeg" ,nombre:'buso rojo hombre.' ,precio:85000 },
    { id: 6,img:"imagenes/ropahombre/c3.jpeg" ,nombre:'camiseta New york.' ,precio:80000 },
    { id: 7,img:"imagenes/ropahombre/c4.jpeg",nombre:'camiseta, solo en negro.' ,precio: 150000 },
    { id: 8,img:"imagenes/ropahombre/cha1.jpeg" ,nombre:'cortavientos semicamuflada.' ,precio:100000 },
    { id: 9,img:"imagenes/ropahombre/cha2.jpeg" ,nombre:'chaqueta, solo en negro.' ,precio:120000 },
    { id: 10,img:"imagenes/ropahombre/cha4.png" ,nombre:'chaqueta yahama.' ,precio:150000},
    { id: 11,img:"imagenes/ropahombre/cha3.jpeg" ,nombre:'chaqueta camuflado azul.',precio:130000},
    { id: 12 , img:"imagenes/ropahombre/g1.png" , nombre:'gorras SD 3 colores disponibles.' , precio:40000 },
    { id: 13, img:"imagenes/ropahombre/z1.jpeg" , nombre:'tennis nike' , precio: 120000},
    { id: 14, img:"imagenes/ropahombre/z2.jpeg" , nombre:'tennis adidas' , precio:180000 },
    { id: 15, img:"imagenes/ropahombre/z3.jpeg" , nombre:'tennis nike' , precio:150000 },
    { id: 16, img:"imagenes/ropahombre/z4.jpeg" , nombre:'tennis nike' , precio:150000 },
    { id: 17, img:"imagenes/ropahombre/z5.jpeg" , nombre:'botas under armour.' , precio:200000 },

    // --------------------------------------------------------------------------------------------------------

    { id:402, img:"imagenes/ropamujer/chaquetaJean.jpeg", nombre:'Chaqueta en jean.', precio:210000 },
    { id:403, img:"imagenes/ropamujer/conjuntoazul.jpeg ", nombre:'Conjunto en ceda.', precio: 120000},
    { id:404, img:"imagenes/ropamujer/deportivomujer.png ", nombre:'Deportivo', precio:115000 },
    { id:405, img:"imagenes/ropamujer/bolsoAdidasRosa.jpeg ", nombre:'Bolso adidas rosado.', precio: 130000},
    { id:406, img:"imagenes/ropamujer/bolsoNikeRojo.jpeg ", nombre:'Bolso nike rojo.', precio:142000 },
    { id:407 , img:"imagenes/ropamujer/busorosa.png" , nombre:'Buso de cuello' , precio:70000 },
    { id:408, img:"imagenes/ropamujer/chaquetaCuerina.jpeg" , nombre:'Chaqueta de cuerina.' , precio:80000 },
    { id:409 , img:"imagenes/ropamujer/pantalonCamuflado.jpeg" , nombre:'Sudadera camuflada.' , precio:80000 },
    { id:410 , img:"imagenes/ropamujer/tenis.png" , nombre:'Force one' , precio:160000 },
    { id:411 , img:"imagenes/ropamujer/TenisAdidasNegro.jpeg" , nombre:'Adidas' , precio:150000 },
    { id:412 , img:"imagenes/ropamujer/busomujer.png" , nombre:'Buso unico color.' , precio:120000 },

    // --------------------------------------------------------------------------------------------------------

    { id:800 , img:"imagenes/" , nombre:'buso.' , precio:120000 },
    // --------------------------------------------------------------------------------------------------------

    { id:1200 , img:"imagenes/accesorios/acc1.jpeg" , nombre:'Evilla para niña, Precio por unidad' , precio:2000  },
    { id:1201 , img:"imagenes/accesorios/acc2.jpeg" , nombre:'Correa de hombre en cuero.' , precio:50000 },
    { id:1202 , img:"imagenes/accesorios/acc3.jpeg" , nombre:'Maquillaje para mujer, Precio por unidad' , precio:10000  },
    { id:1203 , img:"imagenes/accesorios/acc4.jpeg" , nombre:'Brillo para niña, Precio por unidad' , precio:8000 }
];
const proHombre = productos.filter(producto => producto.id >= 1 && producto.id < 400);
const proMujer = productos.filter(producto => producto.id >= 400 && producto.id < 800);
const proNiño = productos.filter(producto => producto.id >= 800 && producto.id < 1200);
const proAcce = productos.filter(producto => producto.id >= 1200 && producto.id < 1600);
// Carrito de compras
let lista_carrito = [];


// Función para renderizar los productos
function renderizarProM(){
    const div1 = document.querySelector(".container-ropa-M");
    if (!div1) {
        console.error('Elemento no encontrado: .container-ropa-M');
        return;
    }
    proMujer.forEach(producto => {
        const html = `
            <div class="casi-articulos">
                <img class="arti" src="${producto.img}" />
                <b class="info-art">
                ${producto.nombre}
                <br>
                ${producto.precio}
                </b>
                <img src="imagenes/bag-buy.svg" alt="Añadir al Carrito" class="imgBuy"  onclick="agregarAlCarrito(${producto.id})">
                </div>  
        `;
        div1.innerHTML += html;
    });
}

function renderizarProH() {
    const div = document.querySelector(".container-ropa-H");
    if (!div) {
        console.error('Elemento no encontrado: .container-ropa-H');
        return;
    }
    proHombre.forEach(producto => {
        const html = `
            <div class="casi-articulos">
                <img class="arti" src="${producto.img}" />
                <b class="info-art">
                ${producto.nombre}
                <br>
                ${producto.precio}
                </b>
                <img src="imagenes/bag-buy.svg" alt="Añadir al Carrito" class="imgBuy"  onclick="agregarAlCarrito(${producto.id})">
            </div>  
        `;
        div.innerHTML += html;    
    });
}
function renderizarProN() {
    const div = document.querySelector(".container-ropa-N");
    if (!div) {
        console.error('Elemento no encontrado: .container-ropa-N');
        return;
    }
    proNiño.forEach(producto => {
        const html = `
            <div class="casi-articulos">
                <img class="arti" src="${producto.img}" />
                <b class="info-art">
                ${producto.nombre}
                <br>
                ${producto.precio}
                </b>
                <img src="imagenes/bag-buy.svg" alt="Añadir al Carrito" class="imgBuy"  onclick="agregarAlCarrito(${producto.id})">
            </div>  
        `;
        div.innerHTML += html;    
    });
}
function renderizarProAcc() {
    const div = document.querySelector(".container-ropa-Acc");
    if (!div) {
        console.error('Elemento no encontrado: .container-ropa-Acc');
        return;
    }
    proAcce.forEach(producto => {
        const html = `
            <div class="casi-articulos">
                <img class="arti" src="${producto.img}" />
                <b class="info-art">
                ${producto.nombre}
                <br>
                ${producto.precio}
                </b>
                <img src="imagenes/bag-buy.svg" alt="Añadir al Carrito" class="imgBuy" onclick="agregarAlCarrito(${producto.id})">
            </div>  
        `;
        div.innerHTML += html;    
    });
}

// Función para agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    lista_carrito.push(producto);
    renderizarCarrito();
}

// Función para renderizar el carrito
function renderizarCarrito() {
    const ul = document.getElementById('lista-carrito');
    ul.innerHTML = '';
    lista_carrito.forEach((producto, index) => {
        const html = `
            <li>
                ${producto.nombre} - $${producto.precio}
                <img src="imagenes/delete.svg" alt="imgEliminar" class="imgElimina" onclick="eliminarDelCarrito(${index})">
            </li>
        `;
        ul.innerHTML += html;
    });
    calcularTotal();
}

// Función para calcular el total del carrito
function calcularTotal() {
    const total = lista_carrito.reduce((acc, producto) => acc + producto.precio, 0);
    document.getElementById('total-carrito').innerText = total;
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(index) {
    lista_carrito.splice(index, 1);
    renderizarCarrito();
}

// Evento para vaciar el carrito
document.getElementById('img-vaciar-carrito').addEventListener('click', () => {
    lista_carrito = [];
    renderizarCarrito();
});


document.addEventListener('DOMContentLoaded', () => {
    renderizarProM();
    renderizarProH();
    renderizarProN();
    renderizarProAcc();
});

//evento click carrito
const cont_carrito = document.querySelector(".cont_carrito");
const listaCarrito = document.querySelector(".cont_listaC");
// const stilo = 'style="display: block;position:relative;right:160px";'

cont_carrito.addEventListener("click",()=>{
    if (listaCarrito.style.display === 'none' || listaCarrito.style.display === '') {
        listaCarrito.style.display = 'block';
        listaCarrito.style.position = 'relative';
        listaCarrito.style.top = '20px';
        listaCarrito.style.right = '190px';
        listaCarrito.style.zIndex = '600';
    } else {
        listaCarrito.style.display = 'none';
    }
    
});