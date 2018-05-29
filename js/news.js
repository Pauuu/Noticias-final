
var cargaAutomatica = false; //variable booleana; ('1')true si carga automática, ('0')false si con botón
var idJson = 1;

$(document).ready(function () {

    $("#botonCargaAutomatica").click(function () {
       
        cargaAutomatica = !cargaAutomatica;

        //cambia el texto del boton indicando si es automatico o no
        if (cargaAutomatica == true) {
            $("#botonCargaAutomatica").text("Desactivar autoscrol");

        } else {
            $("#botonCargaAutomatica").text("Activar autoscrol");
        }
    });

    $(window).scroll(function () {
        if (cargaAutomatica) {
            mostrarNoticiaOnScroll();
        }
    })

    $("#botonCargar").click(function () {
        if (!cargaAutomatica) {
            mostrarNoticia();
        }
    });
});

//imprime por pantalla la la noticia junto con las etiquetas html correspondientes
function crearNoticia(json) {
    $('#divPrincipalNoticias').append('<div class="row noticias">' + '</div>');

    $.each(json, function (i, item) {
        $(".row:last").append(
            '<div class="col-md-6 col-sm-12 noticia">'
            + '<div class="jumbotron">'
            + '<h2 class="titular">' + item.title + '</h2>'
            + '<span>' + '<img class="imagen_mid img-responsive" src="' + item.imgmid + '">' + '</span>' //imagen
            + '<br>'
            + '<span class="fecha">' + item.datetime + '<span>' //fecha
            + '<p>' + item.description + '</p>' //descripción
            + '</div>'
            + '</div>'
        );
    })
}

function mostrarNoticia() {
    if (idJson < 4) {

    
        $.getJSON("https://rawgit.com/Pauuu/Noticias-final/master/data/data" + idJson + ".json", function (jsonObject) {
            //en aquest punt l'objecte jsonObject correspon al fitxer
            crearNoticia(jsonObject);
            
        });

        if (idJson >= 3){
            $('#botonCargar').text('No hay más noticias :(');
        }
    } 
    idJson++;
}

//carga noticias automáticamente cuando el usuario esté llegando al final de la página 
function mostrarNoticiaOnScroll() {
    
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 30) {
        cargaAutomatica = false;
        mostrarNoticia();
        cargaAutomatica = true;
        
    }
}