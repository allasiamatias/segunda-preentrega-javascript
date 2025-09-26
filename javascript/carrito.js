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

    Toastify({
        text: "PRODUCTO ELIMINADO",
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
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
    productosEnCarrito.splice(index, 1)

    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

}

botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito(){

    Swal.fire({
        title: "¿Desea vaciar el carrito?",
        text:`Se van a borrar ${productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad,0)} productos`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0e1f47",
        cancelButtonColor: "#b7b7b7ff",
        confirmButtonText: "Vaciar"
    }).then((result) => {
        if (result.isConfirmed) {
            
            productosEnCarrito.length = 0
            localStorage.setItem ("productos-en-carrito",JSON.stringify(productosEnCarrito))
            cargarProductosCarrito()
            
            Swal.fire({
                title: "Carrito vaciado",
                icon: "success"
        });
        } 
    }) 

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