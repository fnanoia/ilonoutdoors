class Producto{
    constructor (nombre, id, precio, img) {
        this.nombre = nombre,
        this.id = id,
        this.precio = precio,
        this.img = img
    }
    }

const catalogo = [];

const producto1 = new Producto("Zapatillas Salomon X-raise", "01", 20000, "https://sporting.vteximg.com.br/arquivos/ids/295642-1500-1500/1700420-000-2.jpg?v=637583597838270000");
const producto2 = new Producto("Carpa Waterdog Terra II", "02", 18000, "https://http2.mlstatic.com/D_NQ_NP_801762-MLA31008837298_062019-O.webp");
const producto3 = new Producto("Mochila Ossprey Fugit 65lts", "03", 30000, "https://universoventura.vteximg.com.br/arquivos/ids/174842-500-500/Farpoint-55-JASPER-RED-0.jpg?v=636736446619200000");
const producto4 = new Producto ("Campera Ansilta Aconcagua", "04", 38000, "https://www.nakaoutdoors.com.ar/img/articulos/ansilta_rider_ski_1_imagen2.jpg");
const producto5 = new Producto ("Remera Termica Larga Flash UV", "05", 5000, "https://http2.mlstatic.com/D_NQ_NP_761968-MLA45355146601_032021-O.jpg");
const producto6 = new Producto("Pantalon Montagne Mindel Vert", "06", 16000, "https://contents.mediadecathlon.com/p1844718/k$e1d1b46c9fb4298532fded56e81a7ea0/sq/Pantalon+modulable+de+randonn+e+montagne+MH550+Femme.jpg?f=700x700");
const producto7 = new Producto("Zapatillas Hi-tec Bryce 2", "07", 22000, "https://falabella.scene7.com/is/image/FalabellaPE/15257648_1?q=i?wid=800&hei=800&qlt=70");
const producto8= new Producto("Campera Columbia Waternight", "08", 27000, "https://elsoldaditodeplomo.com.ar/wp-content/uploads/2019/11/Campera-Columbia-Watertight-Negra.jpg");
const producto9 = new Producto("Mochila Waterdog Messner 50lts", "09", 25000, "http://www.elpumapesca.com.ar/484-large_default/mochila-waterdog-cabrera-50-litros.jpg");
const producto10 = new Producto("Carpa Doite Zolo 1", "10", 40000, "https://www.completeoutdoors.co.nz/image/cache/data/doite-zolo-especial-closed-29186-360x360.jpg");
const producto11 = new Producto("Guantes Ansilta Mercedario", "11", 12000, "https://www.nakaoutdoors.com.ar/img/articulos/ansilta_mercedario_cubre_mitones_imagen1.jpg");
const producto12= new Producto("Pantalon The North Face Dromek", "12", 20000, "https://content.backcountry.com/images/items/large/TNF/TNF03IY/BEEGN.jpg");

catalogo.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12);

const catalogoJSON = JSON.stringify(catalogo);

export {catalogo};