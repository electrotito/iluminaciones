function datos(){
    // Crear un array de objetos: usuarios----------------------------------------------
    var usuarios = [
        { 
            idusuario: 1, 
            cedula: "1234564", 
            nombre: "Diosnel Caceres", 
            celular: "0976-578656", 
            usuario: "Diosnel", 
            contrasena: "DiosnelC123", 
            rol: "Administrador"
            

        },
    ];
    // Guardar en localStorage como cadena JSON
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    //---------------------------------------------------------------------------------
  
/// Marcas de productos eléctricos de alto nivel
    var marcas = [
        { idmarca: 1, marca: "Schneider Electric" },
        { idmarca: 2, marca: "Siemens" },
        { idmarca: 3, marca: "ABB" },
        { idmarca: 4, marca: "Legrand" },
        { idmarca: 5, marca: "Philips" },
        { idmarca: 6, marca: "3M" },
        { idmarca: 7, marca: "General Electric" },
        { idmarca: 8, marca: "Osram" },
        { idmarca: 9, marca: "Eaton" },
        { idmarca: 10, marca: "Bticino" }
    ];
    localStorage.setItem("marcas", JSON.stringify(marcas));

    // Clasificaciones para electricistas
    var clasificaciones = [
        { idclasificacion: 1, clasificacion: "Cables y Conductores" },
        { idclasificacion: 2, clasificacion: "Interruptores y Tomacorrientes" },
        { idclasificacion: 3, clasificacion: "Iluminación LED" },
        { idclasificacion: 4, clasificacion: "Tableros y Disyuntores" },
        { idclasificacion: 5, clasificacion: "Herramientas Eléctricas" },
        { idclasificacion: 6, clasificacion: "Tuberías y Accesorios" },
        { idclasificacion: 7, clasificacion: "Medición y Control" },
        { idclasificacion: 8, clasificacion: "Material de Montaje" },
        { idclasificacion: 9, clasificacion: "Protección y Seguridad" },
        { idclasificacion: 10, clasificacion: "Automatización" }
    ];
    localStorage.setItem("clasificaciones", JSON.stringify(clasificaciones));

    // Artículos de un local para electricistas de alto nivel
    var articulos = [
        {
            idarticulo: 1,
            codbarra: "7891234560012",
            descripcion: "Cable unipolar 4mm² 100m - Schneider",
            idmarca: 1,
            idclasificacion: 1,
            tiva: 10,
            stockactual: 25,
            preventa: 350000,
            precio: 420000
        },
        {
            idarticulo: 2,
            codbarra: "7891234560029",
            descripcion: "Disyuntor termomagnético 2x32A - Siemens",
            idmarca: 2,
            idclasificacion: 4,
            tiva: 10,
            stockactual: 15,
            preventa: 120000,
            precio: 145000
        },
        {
            idarticulo: 3,
            codbarra: "7891234560036",
            descripcion: "Reflector LED 100W IP65 - Philips",
            idmarca: 5,
            idclasificacion: 3,
            tiva: 5,
            stockactual: 30,
            preventa: 180000,
            precio: 210000
        },
        {
            idarticulo: 4,
            codbarra: "7891234560043",
            descripcion: "Pinza amperométrica digital - Fluke",
            idmarca: 7,
            idclasificacion: 7,
            tiva: 10,
            stockactual: 8,
            preventa: 650000,
            precio: 780000
        },
        {
            idarticulo: 5,
            codbarra: "7891234560050",
            descripcion: "Caja estanca IP67 20x20cm - ABB",
            idmarca: 3,
            idclasificacion: 8,
            tiva: 5,
            stockactual: 20,
            preventa: 95000,
            precio: 115000
        },
        {
            idarticulo: 6,
            codbarra: "7891234560067",
            descripcion: "Tubo corrugado 3/4\" 50m - Legrand",
            idmarca: 4,
            idclasificacion: 6,
            tiva: 10,
            stockactual: 40,
            preventa: 70000,
            precio: 85000
        },
        {
            idarticulo: 7,
            codbarra: "7891234560074",
            descripcion: "Interruptor doble tecla - Bticino",
            idmarca: 10,
            idclasificacion: 2,
            tiva: 5,
            stockactual: 60,
            preventa: 25000,
            precio: 32000
        },
        {
            idarticulo: 8,
            codbarra: "7891234560081",
            descripcion: "Guantes dieléctricos clase 00 - 3M",
            idmarca: 6,
            idclasificacion: 9,
            tiva: 10,
            stockactual: 12,
            preventa: 95000,
            precio: 110000
        },
        {
            idarticulo: 9,
            codbarra: "7891234560098",
            descripcion: "Relé temporizador multifunción - Eaton",
            idmarca: 9,
            idclasificacion: 10,
            tiva: 10,
            stockactual: 10,
            preventa: 180000,
            precio: 210000
        },
        {
            idarticulo: 10,
            codbarra: "7891234560104",
            descripcion: "Lámpara LED tubo T8 18W 120cm - Osram",
            idmarca: 8,
            idclasificacion: 3,
            tiva: 5,
            stockactual: 50,
            preventa: 35000,
            precio: 42000
        }
    ];
    localStorage.setItem("articulos", JSON.stringify(articulos));
}
