// Previene el comportamiento por defecto de los enlaces
$(".nav-link").on( "click", function( event ) {
    event.preventDefault();
    console.log("Prevenido");

    // Función para cargar contenido
    function cargarContenido(archivo) {
        $("#contenido").load(archivo);
        console.log("Cargando " + archivo);
    }

    // Carga el contenido de la página correspondiente en el div con id="contenido"
    $("#link-maceteros").click(function(e){
        e.preventDefault();
        cargarContenido('maceteros.html');
    });

    $("#link-sustratos").click(function(e){
        e.preventDefault();
        cargarContenido('sustratos.html');
    });

    $("#link-flores").click(function(e){
        e.preventDefault();
        cargarContenido('flores.html');
    });

    $("#link-arbustos").click(function(e){
        e.preventDefault();
        cargarContenido('arbustos.html');
    });

    $("#link-carrito").click(function(e){
        e.preventDefault();
        cargarContenido('carrito.html');
    });
});
