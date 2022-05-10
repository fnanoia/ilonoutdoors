import {catalogo} from "./catalogo.js"

const carrito = [];
let catalogoJSON;
let botonAgregar;
let total;
let checkoutButtons;
let carritoStorage;

let lista = document.getElementById("pushear__items__catalogo");
function renderItem (array) {
    for (const producto of array){
        let listaCatalogo = document.createElement("div");
        listaCatalogo.innerHTML = `
        <h3 class="render__div">${producto.nombre}</h3>
        <img src="${producto.img}">
        <p class="render__div">$${producto.precio}</p>
        <button class="boton__agregar" id="${producto.id}">Agregar</button>
        `
        ;
        lista.appendChild(listaCatalogo);
        lista.classList.add("producto__catalogo");
        }
}

//Catalogo en json, busca los productos y renderiza la pagina de inicio de la tienda, eventos de clicks
fetch("json/catalogo.json")
  .then((resp) => resp.json())
  .then((data) => {
  
  catalogoJSON = data;
  renderItem(catalogoJSON);
   
botonAgregar = document.querySelectorAll(".boton__agregar");
for (const boton of botonAgregar) {
    boton.addEventListener("click", agregarItem);
    boton.addEventListener("click", () =>{
        Toastify({
            text: "Agregado al carrito",
            duration: 1000,
            gravity: "top", 
            position: "right", 
            backgroundColor: "rgb(223, 46, 46)"
          }).showToast();
    })
}
})
.catch(console.log("Error"));

//Recargar Productos. ONCLICK
document.getElementById("productos__render").addEventListener("click", () =>{

fetch("json/catalogo.json")
  .then((resp) => resp.json())
  .then((data) => {
  
  catalogoJSON = data;
  renderItem(catalogoJSON);
   
botonAgregar = document.querySelectorAll(".boton__agregar");
for (const boton of botonAgregar) {
    boton.addEventListener("click", agregarItem);
    boton.addEventListener("click", () =>{
        Toastify({
            text: "Agregado al carrito",
            duration: 1000,
            gravity: "top", 
            position: "right", 
            backgroundColor: "rgb(223, 46, 46)"
          }).showToast();
    })
}
})
 lista.innerHTML = "";
});

let compras = document.getElementById("pushear__compras");
function agregarItem(e) {
    compras.innerHTML = "";

    let clicked = catalogo.find((prod) => prod.id == e.target.id);
    carrito.push(clicked);
    localStorage.setItem("CarritoStorage", JSON.stringify(carrito));

   /* let cantProdCarrito = document.getElementById("carrito__contador__items");
    cantProdCarrito.innerHTML = `(${carrito.length})`;*/
}

//Search bar
document.getElementById("search__item__button").addEventListener("click", function (e){

    e.preventDefault();
    let buscar = document.getElementById("search__item__input").value.toLowerCase();
    const searchedItem = catalogo.filter((prod) => prod.nombre.toLowerCase().includes(buscar));
    lista.innerHTML = "";

    if(searchedItem.length > 0){
            renderItem(searchedItem);
            botonAgregar = document.querySelectorAll(".boton__agregar");
            for (const boton of botonAgregar) {
                boton.addEventListener("click", agregarItem);
                boton.addEventListener("click", () =>{
                    Toastify({
                        text: "Agregado al carrito",
                        duration: 1000,
                        gravity: "top",
                        position: "right", 
                        backgroundColor: "rgb(223, 46, 46)",
                      }).showToast();
                })}  
    }else{lista.innerHTML = `<div class="alert__no__results">No existen resultados para su busqueda</div>`};
});

//Side bar
let sideBarButton = document.querySelector(".sidebar__button");
sideBarButton.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("sidebar__button__mostrar");
})

//Recargar carrito local storage.Incluye Checkout(a desarrollar)
let carritoCounter = document.getElementById("carrito__contador");
carritoCounter.addEventListener("click", renderItemCarrito);
carritoCounter.addEventListener("click", renderCheckout);

function renderItemCarrito () {
    lista.innerHTML = "";
    carritoStorage = JSON.parse(localStorage.getItem("CarritoStorage")) || [];

    
    for (const producto of carritoStorage){
        let listaCatalogo = document.createElement("div");
        listaCatalogo.innerHTML = `
        <h3 class="render__div">${producto.nombre}</h3>
        <img src="${producto.img}">
        <p class="render__div">$${producto.precio}</p>
        `
        ;
        lista.appendChild(listaCatalogo);
        lista.classList.add("producto__catalogo");
        };
}

function renderCheckout () {
    carritoStorage = JSON.parse(localStorage.getItem("CarritoStorage")) || [];

    if(carritoStorage.length >= 1){
    
        checkoutButtons = document.createElement("div");
        checkoutButtons.innerHTML = `
        <button id="limpiar__carrito">Limpiar carrito</button>
        <button id="terminar__carrito">Terminar compra</button>
        <div id="total__carrito"></div>
        `;
        
        checkoutButtons.setAttribute("id", "div__checkout");
        lista.appendChild(checkoutButtons);

    
    document.getElementById("limpiar__carrito").addEventListener("click", () =>{
        lista.innerHTML= "";
        compras.innerHTML = "";
        checkoutButtons.innerHTML = "";
        localStorage.clear();
    });

    document.getElementById("terminar__carrito").addEventListener("click", () =>{
        Swal.fire({
            text: "Desea continuar?",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Comprar!",
            denyButtonText: "Cancelar",
              });          
    });

    total = document.getElementById("total__carrito");
    let sumTotal = carrito.reduce( (total, clickedItem) => total + clickedItem.precio, 0); 
    let totalAgregado = document.createElement("div"); 
    if(sumTotal > 0){
    totalAgregado.innerText = `Total $${sumTotal}`;}

    total.appendChild(totalAgregado);
    total.classList.add("total__agregado");
    }else{lista.innerHTML= `<div class="alert__no__results">Aun no se han agregado productos al carrito</div>`}
}



