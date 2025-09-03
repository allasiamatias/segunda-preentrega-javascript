const productos = [
    {
        id:"alma-mora-rosado",
        titulo:"Alma Mora Rosado",
        imagen:"./imagenes/alma_mora_rosado.png",
        categoria:{
            nombre:"Vinos",
            id:"vinos"
        },
        precio:4500,
    },
    {
        id:"amstel",
        titulo:"Amstel",
        imagen:"./imagenes/amstel.png",
        categoria:{
            nombre:"Cervezas",
            id:"cervesas"
        },
        precio:2500,
    },
    {
        id:"brahma",
        titulo:"Brahma",
        imagen:"./imagenes/brahma.png",
        categoria:{
            nombre:"Cervezas",
            id:"cervezas"
        },
        precio:2300,
    },
    {
        id:"catena-malbec",
        titulo:"Catena Malbec",
        imagen:"./imagenes/catena-malbec.png",
        categoria:{
            nombre:"Vinos",
            id:"vinos"
        },
        precio:15000,
    },
    {
        id:"chacabuco-chenin-dulce",
        titulo:"Chacabuco Chenin Dulce",
        imagen:"./imagenes/chacabuco-chenin-dulce.png",
        categoria:{
            nombre:"Vinos",
            id:"vinos"
        },
        precio:5000,
    },
    {
        id:"corona",
        titulo:"Corona",
        imagen:"./imagenes/corona-botella.png",
        categoria:{
            nombre:"Cervezas",
            id:"cervezas"
        },
        precio:3500,
    },
    {
        id:"finca-las-moras-rosado-dulce",
        titulo:"Finca las Moras Rosado Dulce",
        imagen:"./imagenes/finca-las-moras-rosado-dulce.png",
        categoria:{
            nombre:"Vinos",
            id:"vinos"
        },
        precio:5500,
    },
    {
        id:"fond-de-cave-cabernet",
        titulo:"Fond de Cave Cabernet",
        imagen:"./imagenes/fond-de-cave-cabernet.png",
        categoria:{
            nombre:"Vinos",
            id:"vinos"
        },
        precio:10000,
    },
    {
        id:"gin-beefeater",
        titulo:"Beefeater",
        imagen:"./imagenes/gin-beefeater.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:23000,
    },
    {
        id:"gin-bombay",
        titulo:"Bombay Sapphire",
        imagen:"./imagenes/gin-bombay.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:25000,
    },
    {
        id:"gin-gordon",
        titulo:"Gordon's",
        imagen:"./imagenes/gin-gordon.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:15000,
    },
    {
        id:"gin-tanqueray",
        titulo:"Tanqueray",
        imagen:"./imagenes/gin-tanqueray.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:21000,
    },
    {
        id:"heineken",
        titulo:"Heineken",
        imagen:"./imagenes/heineken.png",
        categoria:{
            nombre:"Cervezas",
            id:"cervezas"
        },
        precio:3800,
    },
    {
        id:"johnnie-walker-black",
        titulo:"Johnnie Walker Black Label",
        imagen:"./imagenes/johnnie-walker-black.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:45000,
    },
    {
        id:"johnnie-walker-red",
        titulo:"Johnnie Walker Red Label",
        imagen:"./imagenes/johnnie-walker-red.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:35000,
    },
    {
        id:"patridge-malbec",
        titulo:"Patridge Malbec",
        imagen:"./imagenes/patridge-malbec.png",
        categoria:{
            nombre:"Vinos",
            id:"vinos"
        },
        precio:7000,
    },
    {
        id:"portillo-sauvignon-blanc",
        titulo:"Portillo Sauvignon Blanc",
        imagen:"./imagenes/portillo-sauvignon-blanc.png",
        categoria:{
            nombre:"Vinos",
            id:"vinos"
        },
        precio:4800,
    },
    {
        id:"quilmes",
        titulo:"Quilmes",
        imagen:"./imagenes/quilmes.png",
        categoria:{
            nombre:"Cervezas",
            id:"cervezas"
        },
        precio:2000,
    },
    {
        id:"ron-bacardi",
        titulo:"Bacardi",
        imagen:"./imagenes/ron-bacardi.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:16000,
    },
    {
        id:"ron-havana",
        titulo:"Havana",
        imagen:"./imagenes/ron-havana.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:18000,
    },
    {
        id:"rutini-cabernet",
        titulo:"Rutini Cabernet",
        imagen:"./imagenes/rutini-cabernet.png",
        categoria:{
            nombre:"Vinos",
            id:"vinos"
        },
        precio:20000,
    },
    {
        id:"santa-julia-sauvignon-blanc",
        titulo:"Santa Julia Sauvignon Blanc",
        imagen:"./imagenes/alma_mora_rosado.png",
        categoria:{
            nombre:"Vinos",
            id:"vinos"
        },
        precio:3800,
    },
    {
        id:"stella-artois",
        titulo:"Stella Artois",
        imagen:"./imagenes/stella-artois.png",
        categoria:{
            nombre:"Cervezas",
            id:"cervezas"
        },
        precio:4000,
    },
    {
        id:"tequila-jose-cuervo",
        titulo:"Jose Cuervo",
        imagen:"./imagenes/tequila-jose-cuervo.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:17000,
    },
    {
        id:"trumpeter-malbec",
        titulo:"Trumpeter Malbec",
        imagen:"./imagenes/trumpeter-malbec.png",
        categoria:{
            nombre:"Vinos",
            id:"vinos"
        },
        precio:8500,
    },
    {
        id:"vodka-absolut",
        titulo:"Absolut",
        imagen:"./imagenes/vodka-absolut.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:23000,
    },
    {
        id:"vodka-skyy",
        titulo:"Skyy",
        imagen:"./imagenes/vodka-skyy.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:10000,
    },
    {
        id:"vodka-smirnoff",
        titulo:"Smirnoff",
        imagen:"./imagenes/vodka-smirnoff.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:15000,
    },
    {
        id:"whisky-ballantines",
        titulo:"Ballantines",
        imagen:"./imagenes/whisky-ballantines.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:22000,
    },
    {
        id:"whisky-jack-daniels",
        titulo:"Jack Daniels",
        imagen:"./imagenes/whisky-jack.daniels.png",
        categoria:{
            nombre:"Destilados",
            id:"destilados"
        },
        precio:40000,
    },
]

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

cargarProductos(productos)

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