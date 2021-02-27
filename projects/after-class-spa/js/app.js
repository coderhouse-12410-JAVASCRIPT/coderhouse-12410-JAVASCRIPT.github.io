// Aca cargamos el router, es nuestro entrypoint
$( document ).ready(function() {
    router();
});

/*$( document ).on('change', function(evento ){
    router();
} );
*/
window.addEventListener('hashchange',function(){
    router();
})

