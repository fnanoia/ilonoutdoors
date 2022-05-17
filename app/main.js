import {catalogo} from "./catalogo.js"

const carrito = [];
let catalogoJSON;
let botonAgregar;
let botonQuitar;
let total;
let checkoutButtons;
let carritoStorage;
let sumTotalStorage;

//Fetch de JSON estatico, renderiza la pagina de inicio de la tienda
function fetchData () {
fetch("json/catalogo.json")
  .then((resp) => resp.json())
  .then((data) => {
  
  catalogoJSON = data;
  renderItemHome(catalogoJSON);
   
botonAgregar = document.querySelectorAll(".boton__agregar");
for (const boton of botonAgregar) {
    boton.addEventListener("click", agregarItem);
    boton.addEventListener("click", () =>{
    toastAdd();
    })}
});
}
fetchData();

//Funcion para renderizar un array
let lista = document.getElementById("pushear__items__catalogo");
function renderItemHome (array) {
    for (const producto of array){
        let listaCatalogo = document.createElement("div");
        listaCatalogo.innerHTML = `
        <h3 class="render__div">${producto.nombre}</h3>
        <img src="${producto.img}">
        <p class="render__div__text">${producto.descripcion}</p>
        <br>
        <p class="render__div">$${producto.precio}</p>
        <button class="boton__agregar" id="${producto.id}">Agregar</button>`
        ;
        lista.appendChild(listaCatalogo);
        lista.classList.add("producto__catalogo");
        }
}

//Recargar Home Page
document.getElementById("home__render").addEventListener("click", () =>{
    fetchData();
    lista.innerHTML = "";
});

//Actualizar Local Storage
function actualizarStorage() {
    localStorage.setItem("CarritoStorage", JSON.stringify(carrito));
    let sumTotal = carrito.reduce( (total, clickedItem) => total + clickedItem.precio, 0);
    localStorage.setItem("SumTotalStorage", JSON.stringify(sumTotal));
}

//Search bar
document.getElementById("search__item__button").addEventListener("click", function (e){

    e.preventDefault();
    let buscar = document.getElementById("search__item__input").value.toLowerCase();
    const searchedItem = catalogo.filter((prod) => prod.nombre.toLowerCase().includes(buscar));
    lista.innerHTML = "";

    //Render busqueda
    if(searchedItem.length > 0){
    renderItemHome(searchedItem);
    botonAgregar = document.querySelectorAll(".boton__agregar");
    for (const boton of botonAgregar) {
        boton.addEventListener("click", agregarItem);
        boton.addEventListener("click", () =>{
        toastAdd();
    })}  
    }else{lista.innerHTML = `<div class="alert__no__results">No existen resultados para su busqueda</div>`;
    setTimeout(()=> {
        lista.innerHTML= "";
        fetchData();}, 2000);}
});

//Side Bar Menu
let sideBarButton = document.querySelector(".sidebar__button");
sideBarButton.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("sidebar__button__mostrar");
})

//Agrega item al carrito
function agregarItem(e) {
   
    let clicked = catalogo.find((prod) => prod.id == e.target.id);
    carrito.push(clicked);

    //Actualizo localstorage
    actualizarStorage();
}

//Elimina item del carrito
function quitarItem(e){

    let unClicked = carrito.find((prod) => prod.id == e.target.id);
    let undoClicked = carrito.indexOf(unClicked);
    if(undoClicked !== -1){carrito.splice(undoClicked, 1)};

    //Actualizar localstorage
    actualizarStorage();

    //Renderizo todo menos lo que elimine
    renderItemCarrito();
    renderCheckout();
}

//Eventos para menu>Carrito
let carritoCounter = document.getElementById("carrito__contador");
carritoCounter.addEventListener("click", renderItemCarrito);
carritoCounter.addEventListener("click", renderCheckout);

//Render Carrito
function renderItemCarrito () {
    lista.innerHTML = "";
    carritoStorage = JSON.parse(localStorage.getItem("CarritoStorage")) || [];

    for (const producto of carritoStorage){
        let listaCatalogo = document.createElement("div");
        listaCatalogo.innerHTML = `
        <h3 class="render__div">${producto.nombre}</h3>
        <img src="${producto.img}"></img>
        <p class="render__div">$${producto.precio}</p>
        <button class="boton__quitar" id="${producto.id}">Eliminar</button>`
        ;
        lista.appendChild(listaCatalogo);
        lista.classList.add("producto__catalogo");
        };

    //Eliminar producto del carrito
    botonQuitar = document.querySelectorAll(".boton__quitar");
    for (const boton of botonQuitar) {
            boton.addEventListener("click", quitarItem);
        };
}

//Render CheckOut Box. Se muestra cuando existen productos en el carrito
function renderCheckout () {
    if(carritoStorage.length >= 1){
        checkoutButtons = document.createElement("div");
        checkoutButtons.innerHTML = `
        <button id="terminar__carrito">Terminar compra</button>
        <div id="total__carrito"></div>`
        ;
    
        checkoutButtons.setAttribute("id", "div__checkout");
        lista.appendChild(checkoutButtons);

        //Actualizar total $
        sumTotalStorage = localStorage.getItem("SumTotalStorage") || [];
        if(total =! null){
        total = document.getElementById("total__carrito");
        if(sumTotalStorage > 0){total.innerText = `Total $${sumTotalStorage}`;}
    
        total.classList.add("total__agregado");}

        //Eventos de botones
        document.getElementById("terminar__carrito").addEventListener("click", () =>{
         swalCheckout();
        });

    }else{lista.innerHTML= `<div class="alert__no__results">Aun no se han agregado productos al carrito</div>`;
    setTimeout(()=> {
        lista.innerHTML= "";
        fetchData();}, 2000);}
}