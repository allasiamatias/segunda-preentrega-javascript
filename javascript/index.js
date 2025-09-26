let productos = []

fetch("./javascript/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data
        cargarProductos (productos)
    })

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const acumuladorCarrito = document.querySelector("#acumulador-carrito")

function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = ""

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `

        contenedorProductos.append(div)
    })
    actualizarBotonesAgregar()
}



botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e) => {
    
        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.target.classList.add("active")
        
        if (e.currentTarget.id !== "todos"){
            const productosCategoria = productos.find (producto => producto.categoria.id === e.target.id)

            tituloPrincipal.innerText = productosCategoria.categoria.nombre
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else{
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }

    })
})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")


if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarAcumulador()
}else{
    productosEnCarrito = []
}

function agregarAlCarrito(e){

    Toastify({
        text: "PRODUCTO AGREGADO",
        duration: 1500,
        close: true,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to right, #0e1f47, #1e356bff)",
            borderRadius:"2rem",
            fontSize:"0.8rem"
        },
        offset:{
            x:'2rem',
            y:'4.5rem'
        },
        onClick: function(){} 
    }).showToast()

    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id ===idBoton)
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index= productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    }else{
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }
    actualizarAcumulador()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarAcumulador (){
    let acumuladorCarro = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    acumuladorCarrito.innerText = acumuladorCarro
}