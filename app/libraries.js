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
    /*text: "You won't be able to revert this!",*/
    /*icon: 'warning',*/
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
    }else if (result.dismiss === Swal.DismissReason.cancel){
        swal.fire(
        'Cancelada',
        'Esperamos volver a verte pronto',
        'error'
      )}
});
}

function toastAdd () {
    Toastify({
        text: "Agregado al carrito",
        duration: 1000,
        gravity: "top", 
        position: "right", 
        style: {
        background: "rgb(223, 46, 46)",
        }
      }).showToast();
}