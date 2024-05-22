// Previene el comportamiento por defecto de los enlaces
var carrito = [];

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

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    // Limpiar lista de carrito
    $('#lista-carrito').empty();

    // Calcular total del carrito
    var total = 0;

    // Iterar sobre los productos en el carrito
    $.each(carrito, function(index, producto) {
        // Agregar producto a la lista del carrito
        $('#lista-carrito').append('<li>' + producto.nombre + ' - $' + producto.precio.toFixed(2) + '</li>');
        
        // Sumar el precio del producto al total
        total += producto.precio;
    });

    // Mostrar total del carrito
    $('#total-carrito').text('$' + total.toFixed(2));
}

$(".agregar-carrito").on( "click", function( event ) {
    console.log("Agregando a carrito");

    $("#agregar-carrito").click(function(e){
        mostrarCarrito();
    });
});
// Añade productos al carrito (probando con arbustos.html)

// Manejar clic en botón "Agregar al carrito"
$('#agregarCarrito').click(function(e) {
    console.log("Agregado al carrito");
    
    // Obtener información del producto desde el atributo data
    var nombre = $(this).data('nombre');
    var precio = $(this).data('precio');
    
    // Agregar producto al carrito
    carrito.push({ nombre: nombre, precio: precio });

    // Actualizar visualización del carrito
    mostrarCarrito();
  });

