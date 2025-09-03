let productosEnCarrito = localStorage.getItem("productos-en-carrito")
productosEnCarrito = JSON.parse(productosEnCarrito)

const carritoVacio = document.querySelector("#carrito-vacio")
const contenedorProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
const botonVaciar = document.querySelector(".carrito-acciones-vaciar")
const contenedotTotal = document.querySelector(".carrito-acciones-total")
const botonComprar = document.querySelector(".carrito-acciones-comprar")

function cargarProductosCarrito(){
    if(productosEnCarrito && productosEnCarrito.length > 0){

        carritoVacio.classList.add("disabled")
        contenedorProductos.classList.remove("disabled")
        contenedorCarritoAcciones.classList.remove("disabled")
        contenedorCarritoComprado.classList.add("disabled")

        contenedorProductos.innerHTML = ""

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div")
            div.classList.add("carrito-producto")
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-total">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
            `

            contenedorProductos.append(div)
        })


    }else{

        carritoVacio.classList.remove("disabled")
        contenedorProductos.classList.add("disabled")
        contenedorCarritoAcciones.classList.add("disabled")
        contenedorCarritoComprado.classList.add("disabled")
    
    }

    actualizarBotonesEliminar()
    actualizarTotal()
}

cargarProductosCarrito()

function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
    productosEnCarrito.splice(index, 1)

    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

}

botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito(){
    productosEnCarrito.length = 0
    localStorage.setItem ("productos-en-carrito",JSON.stringify(productosEnCarrito))
    cargarProductosCarrito()
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc,producto) => acc + producto.precio * producto.cantidad, 0)
    contenedotTotal.innerText = `$${totalCalculado}`
}

botonComprar.addEventListener("click", comprarCarrito)
function comprarCarrito(){
    productosEnCarrito.length = 0
    localStorage.setItem ("productos-en-carrito",JSON.stringify(productosEnCarrito))
        carritoVacio.classList.add("disabled")
        contenedorProductos.classList.add("disabled")
        contenedorCarritoAcciones.classList.add("disabled")
        contenedorCarritoComprado.classList.remove("disabled")
}