document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener una referencia al contenedor de los botones usando su ID
    const botonSec = document.getElementById('botonSec');
    // 2. Definir el umbral de scroll: cuántos píxeles debe bajar el usuario
    //    para que los botones aparezcan. Puedes ajustar este valor.
     const scrollThreshold = 0; // Por ejemplo, 700px desde la parte superior de la página

    // 3. Crear una función que se ejecutará cada vez que el usuario haga scroll
    function handleScroll() {
        // window.scrollY devuelve la cantidad de píxeles que la página ha sido desplazada verticalmente
        if (window.scrollY > scrollThreshold) {
            // Si el usuario ha bajado más allá del umbral
            botonSec.classList.add('show'); // Añade la clase 'show' al contenedor
        } else {
            // Si el usuario sube por encima del umbral
            botonSec.classList.remove('show'); // Quita la clase 'show' del contenedor
        }
    }

    // // 4. Añadir un "oyente de eventos" (event listener) a la ventana.
    // //    Cada vez que ocurra el evento 'scroll', se llamará a la función handleScroll.
    window.addEventListener('scroll', handleScroll);

    // 5. Opcional: Llama a handleScroll una vez al cargar la página.
    //    Esto es útil si el usuario recarga la página y ya está en una posición de scroll avanzada.
    handleScroll();

});

