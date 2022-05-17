class Producto{
    constructor (nombre, id, precio, img, descripcion) {
        this.nombre = nombre,
        this.id = id,
        this.precio = precio,
        this.img = img,
        this.descripcion = descripcion
    }
    }

const catalogo = [];

const producto1 = new Producto("Zapatillas Salomon X-raise", "01", 20000, "https://sporting.vteximg.com.br/arquivos/ids/295642-1500-1500/1700420-000-2.jpg?v=637583597838270000","Con su estilo moderno y deportivo, la X RAISE se centra en la estabilidad, la comodidad y el rendimiento. La construcción con el sistema Quicklace™ para ajustes de cordones sencillos y talón y puntera reforzados");
const producto2 = new Producto("Carpa Waterdog Terra II", "02", 18000, "https://http2.mlstatic.com/D_NQ_NP_801762-MLA31008837298_062019-O.webp","Medida exterior: 210 x 310 x 130 cm. Tejido Polyester 68D / 190T. Piso Polietileno 100% PE SHEET 12x10 130 g/m2. Columna de Agua 1000mm P.U. Estructura Fibra de vidrio 7.9 mm. Peso: 3,90 kg");
const producto3 = new Producto("Mochila Ossprey Fugit 65lts", "03", 30000, "https://universoventura.vteximg.com.br/arquivos/ids/174842-500-500/Farpoint-55-JASPER-RED-0.jpg?v=636736446619200000","La Fugit 65 posee respaldo con tecnologia AirScape™ moldeado por inyección y las hombreras y el cinturón lumbar permiten que la mochila acompañe todos tus movimientos cuando te adentres en terrenos exigentes");
const producto4 = new Producto("Campera Ansilta Aconcagua", "04", 38000, "https://plataforma.interfuerzas.com.ar/Panelcontenidos/Contenidos/Campera-ansilta-dama-gore-tex-aconcagua-iii-151395741958324736.jpg","Campera técnica de alta montaña para expediciones. 100% impermeable y cortaviento, alta respirabilidad y bajo peso. Tejido GORE-TEX® 3C PRO SHELL con tecnología MICRO GRID mejora resistencia a la abrasión interna y enganches");
const producto5 = new Producto("Remera Termica Larga Flash UV", "05", 5000, "https://http2.mlstatic.com/D_NQ_NP_761968-MLA45355146601_032021-O.jpg","La transpiración se aisla de la piel gracias a las características del SPANDEX®. Una vez que la tela absorbe toda la humedad se dispersa rápidamente a través de las distintas capas para que se evapore más rápido");
const producto6 = new Producto("Pantalon Montagne Mindel Vert", "06", 16000, "https://contents.mediadecathlon.com/p1844718/k$e1d1b46c9fb4298532fded56e81a7ea0/sq/Pantalon+modulable+de+randonn+e+montagne+MH550+Femme.jpg?f=700x700","Sistema desmontable a bermuda. Confeccionada en una tela altamente respirable, gracias al SMART-DRY®. Esta prenda es de secado rápido. El material principal es Dry sec: microesmerilado y repelente al agua. Poliamida 100%");
const producto7 = new Producto("Zapatillas Hi-tec Bryce 2", "07", 22000, "https://falabella.scene7.com/is/image/FalabellaPE/15257648_1?q=i?wid=800&hei=800&qlt=70","Tecnologia: M-D Traction, la plantilla extraíble y la Entresuela de EVA moldeada garantiza una mejor amortiguación bajo los pies. La suela exterior de goma M-D Traction mejora el agarre y brinda durabilidad");
const producto8 = new Producto("Campera Columbia Waternight", "08", 27000, "https://elsoldaditodeplomo.com.ar/wp-content/uploads/2019/11/Campera-Columbia-Watertight-Negra.jpg","Campera 100% impermeable y respirable ultraliviana para toda actividad outdoor y urbana. Campera Impermeable Watertight™ II con costuras totalmente termo-selladas y tecnología Omni-Tech®.");
const producto9 = new Producto("Mochila Waterdog Messner 50lts", "09", 25000, "https://galotiempolibre.online/wp-content/uploads/2020/08/mochila-cabrera50-waterdog-AG000406-1-768x768.jpg","Material: Polyester Ripstop 210D + Polyester 600D. Compartimentos con acceso superior para bolsa y apertura para H2O. Bolsillos con cierre estanco y laterales de mesh. Sistema espaldar regulable protección lumbar");
const producto10 = new Producto("Carpa Doite Zolo 1", "10", 40000, "https://www.completeoutdoors.co.nz/image/cache/data/doite-zolo-especial-closed-29186-360x360.jpg","Carpa de línea Técnica - Vivac. De capacidad individual, de uso temporal o de emergencia. Peso: 1,5 Kg. Largo total: 200 cm. Ancho total: 120 cm. Alto: 90 cm. Impermeabilidad cubre techo: 5000 mm. Protección solar: UPF 50+");
const producto11 = new Producto("Guantes Ansilta Mercedario", "11", 12000, "https://www.nakaoutdoors.com.ar/img/articulos/ansilta_mercedario_cubre_mitones_imagen1.jpg","Mitones técnicos especiales para alta montaña. Destinados a expediciones invernales, son cortaviento y extremadamente respirables. Confeccionados en WINDSTOPPER® Insulated Shell. Fill Power: FP 800. Goose Down 90/10.");
const producto12 = new Producto("Pantalon The North Face Dromek", "12", 20000, "https://content.backcountry.com/images/items/large/TNF/TNF03IY/BEEGN.jpg","Está confeccionado en tejido elástico para que te muevas sin restricciones. Con tecnología absorbente y de secado rápido FlashDry™, que está diseñada para eliminar la humedad ayudándote en mantenerte seco, fresco y cómodo");

catalogo.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12);

/*const catalogoJSON = JSON.stringify(catalogo);*/

export {catalogo};