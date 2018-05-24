
var cargaAutomatica = false; //variable booleana; ('1')true si carga automática, ('0')false si con botón
var idNoticia = 1;

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
            for (i = 0; i < 2; i++) { //carga 2 noticias a la vez
                mostrarNoticia();
            }
        }
    });

});

//imprime por pantalla la la noticia junto con las etiquetas html correspondientes
function crearNoticia(json) {
    $.each(json, function (i, item) {
        $(".noticias").append(
            '<div class="col-md-6 col-sm-12 noticia">'
            + '<div class="jumbotron">'
            + '<h2 class="titular">' + item.title + '</h2>'
            + '<span>' + '<img class="imagen_mid img-responsive" src="' + item.imgmid + '">' + '</span>' //imagen
            + '<br>'
            + '<span>' + item.datetime + '<span>' //fecha
            + '<p>' + item.description + '</p>' //descripción
            + '</div>'
            + '</div>'
        );
    })
}

function mostrarNoticia() {
    $.getJSON("https://cdn.rawgit.com/Pauuu/Noticias-final/767de142/data/data" + idNoticia + ".json", function (jsonObject) {
        //en aquest punt l'objecte jsonObject correspon al fitxer
        crearNoticia(jsonObject);
    })
        .fail(function () {
            $('#botonCargar').text('No hay más noticias :(');
        });


    idNoticia++;
}

//carga noticias automáticamente cuando el usuario esté llegando al final de la página 
function mostrarNoticiaOnScroll() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 30) {
        //para que cargue de dos en dos
        mostrarNoticia();
    }
}
/*
function mostrarNoticiaOnBoton() {
    $("#botonCargar").click(function () {
        mostrarNoticia();
    });
}*/
