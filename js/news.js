
var automatico = false; //variable booleana; ('1')true si carga automática, ('0')false si con botón

$(document).ready(function () {

    $("#botonCargaAutomatica").click(function () {
        if (automatico == true) {

            automatico = false;
            $("#botonCargaAutomatica").text("Activar autoscrol");

        } else {
            automatico = true;
            $("#botonCargaAutomatica").text("Desactivar autoscrol");
        }

    });

    $(window).scroll(function () {
        if (automatico) {
            mostrarNoticiaOnScroll();
        }
    })

});

//imprime por pantalla la la noticia junto con las etiquetas html correspondientes
function mostrarNoticia(json) {
    $.each(json, function (i, item) {
        $(".noticias").append(
            '<div class="col-sm-6 noticia">'
            + '<div class="jumbotron">'
            + '<h2 class="titular">' + item.title + '</h2>'
            + '<span>' + '<img>' + '</span>' //imagen
            + '<br>'
            + '<span>' + + '<span>' //fecha
            + '<p>' + + '</p>' //descripción
            + '</div>'
            + '</div>'
        );
    })
}

//carga noticias automáticamente cuando el usuario esté llegando al final de la página 
function mostrarNoticiaOnScroll() {

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 20) {

        $.getJSON("https://rawgit.com/Pauuu/Noticias-final/master/data/data" + 1 + ".json", function (jsonObject) {
            //en aquest punt l'objecte jsonObject correspon al fitxer
            mostrarNoticia(jsonObject);
        });

    }
}
