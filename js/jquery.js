$(document).ready(function() {
    // Función para cargar contenido
    function cargarContenido(archivo) {
        $("#contenido").load(archivo);
        console.log("Cargando " + archivo);
    }

    // Previene el comportamiento por defecto de los enlaces
    $(".nav-link").off("click").on("click", function(event) {
        event.preventDefault();
        const id = $(this).attr('id');
        switch (id) {
            case "link-maceteros":
                cargarContenido('maceteros.html');
                break;
            case "link-sustratos":
                cargarContenido('sustratos.html');
                break;
            case "link-flores":
                cargarContenido('flores.html');
                break;
            case "link-arbustos":
                cargarContenido('arbustos.html');
                break;
            case "link-carrito":
                cargarContenido('carrito.html');
                break;
                /*
            case "link-iniciar-sesion":
                cargarContenido('iniciosesion.html');
                break;
            case "link-registrarse":
                cargarContenido('registro.html');
                break;
                */
        }
    });
});
