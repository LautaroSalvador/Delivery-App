const PRODUCTS = [
    {
        id: "producto-01",
        titulo: "Hamburguesa",
        categoria: {
            nombre: "Productos",
            id: "producto",
        },
        precio: 1000,

    },
    {
        id: "producto-02",
        titulo: "Hamburguesa de pollo",
        categoria: {
            nombre: "Productos",
            id: "producto",
        },
        precio: 1100,

    },
    {
        id: "producto-03",
        titulo: "Milanesa",
        categoria: {
            nombre: "Productos",
            id: "producto",
        },
        precio: 1200,

    },
    {
        id: "producto-04",
        titulo: "Milanesa de pollo",
        categoria: {
            nombre: "Productos",
            id: "producto",
        },
        precio: 1300,

    },
    {
        id: "producto-05",
        titulo: "Papas fritas",
        categoria: {
            nombre: "Productos",
            id: "producto",
        },
        precio: 1400,

    },
    {
        id: "producto-06",
        titulo: "Queso Cheddar",
        categoria: {
            nombre: "Productos",
            id: "producto",
        },
        precio: 1500,

    },
    {
        id: "producto-07",
        titulo: "Agua",
        categoria: {
            nombre: "Productos",
            id: "producto",
        },
        precio: 1600,

    },
]

const containerCardsProductos = document.querySelector("#container-cards-productos");

let botonesAgregar = document.querySelectorAll(".producto-producto");

function cargarProductos() {

    PRODUCTS.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =
            `
        <div class="card-body">
          <h3 class="card-title">${card.titulo}</h3>
          <p class="card-text">${"$"} ${card.precio}</p>
          <a class="producto-producto" id= "${card.id}">Comprar</a>
        </div>`
            ;

        containerCardsProductos.append(div);




    });

    actualizarBotonesAgregar();

}

cargarProductos();




function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-producto");

    botonesAgregar.forEach(boton => (
        boton.addEventListener("click", agregarAlCarrito)
    ));
};






let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumero();

} else {
    productosEnCarrito = []
}



function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = PRODUCTS.find(card => card.id === idBoton);


    if (productosEnCarrito.some(card => card.id === idBoton)) {
        const index = productosEnCarrito.findIndex(card => card.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}




function actualizarNumero() {

    let nuevoNumero = productosEnCarrito.reduce((acc, card) => acc + card.cantidad, 0);
   numeroCarrito.innerText = nuevoNumero;

    console.log(nuevoNumero);
}





const toastify = document.querySelector("#container-cards-productos");

toastify.addEventListener("click", () => {
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        destination: "./carrito.html",
        newWindow: false,
        close: true,
        gravity: "bottom", 
        position: "right",
        stopOnFocus: true,
        onClick: function () { }
    }).showToast();
})
