
var cargaAutomatica = false; //variable booleana; ('1')true si carga automática, ('0')false si con botón
var idNoticia = 1;

$(document).ready(function () {

    $("#botonCargaAutomatica").click(function () {
        if (cargaAutomatica == true) {

            cargaAutomatica = false;
            $("#botonCargaAutomatica").text("Activar autoscrol");

        } else {
            cargaAutomatica = true;
            $("#botonCargaAutomatica").text("Desactivar autoscrol");
        }

    });

    $(window).scroll(function () {
        if (cargaAutomatica) {
            mostrarNoticiaOnScroll();
        }
    })

    $("#botonCargar").click(function () {
        if (!cargaAutomatica) {
            for (i = 0; i < 4; i++) {
                mostrarNoticia();
            }
        }
    });

});

//imprime por pantalla la la noticia junto con las etiquetas html correspondientes
function crearNoticia(json) {
    $.each(json, function (i, item) {
        $(".noticias").append(
            '<div class="col-sm-6 noticia">'
            + '<div class="jumbotron">'
            + '<h2 class="titular">' + item.title + '</h2>'
            + '<span>' + '<img>' + '</span>' //imagen
            + '<br>'
            + '<span>' + item.datetime + '<span>' //fecha
            + '<p>' + item.description + '</p>' //descripción
            + '</div>'
            + '</div>'
        );
    })
}

function mostrarNoticia() {
    $.getJSON("https://rawgit.com/Pauuu/Noticias-final/master/data/data" + idNoticia + ".json", function (jsonObject) {
        //en aquest punt l'objecte jsonObject correspon al fitxer
        crearNoticia(jsonObject);
    });
}

//carga noticias automáticamente cuando el usuario esté llegando al final de la página 
function mostrarNoticiaOnScroll() {

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 30) {
        //para que cargue de dos en dos
        mostrarNoticia();
        mostrarNoticia();
    }
}

/*
function mostrarNoticiaOnScroll() {

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 25) {

        $.getJSON("https://rawgit.com/Pauuu/Noticias-final/master/data/data" + idNoticia + ".json", function (jsonObject) {
            //en aquest punt l'objecte jsonObject correspon al fitxer
            crearNoticia(jsonObject);
        });

    }
}
*/

function mostrarNoticiaOnBoton() {
    $("#botonCargar").click(function () {
        crearNoticia();
        crearNoticia();
    });
}
