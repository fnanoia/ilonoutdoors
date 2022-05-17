function swalCheckout () {
const swal = Swal.mixin({
    customClass: {
      confirmButton: 'boton__confirmar',
      cancelButton: 'boton__cancelar'
    },
    buttonsStyling: false
  })
  
  swal.fire({
    title: 'Confirmar compra?',
    html: 
    `<form>
    <input type="text" class="input__swal" name="nombre" placeholder="Nombre"><br>
    <input type="text" class="input__swal" name="email" placeholder="Email"><br>
    </form>`,
    showCancelButton: true,
    confirmButtonText: 'Comprar!',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
        swal.fire(
        'Hecho!',
        'Gracias por confiar en ILON OUTDOORS',
        'success')
    }
  
  
});
}

function toastAdd () {
    Toastify({
        text: "Agregado al carrito",
        duration: 1000,
        gravity: "top", 
        position: "right", 
        style: {
        background: "#33691E",
        }
      }).showToast();
}