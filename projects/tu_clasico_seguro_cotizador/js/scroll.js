$('#button1').click( function(event) { 
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#form-header').offset().top  
    }, 1400);
} );

$('#homeButton').click( function(event) { 
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#headerTop').offset().top  
    }, 1400);
} );

$('#serviciosButton').click( function(event) { 
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#servicios').offset().top  
    }, 1400);
} );

$('#caracteristicasButton').click( function(event) { 
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#caracteristicas').offset().top  
    }, 1400);
} );

$('#contactanosButton').click( function(event) { 
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#header-title').offset().top  
    }, 1400);
} );

$('#sobreNosotrosButton').click( function(event) { 
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#footer').offset().top  
    }, 1400);
} );


