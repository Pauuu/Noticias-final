
var automatico = false; //variable booleana; ('1')true si carga automática, ('0')false si con botón


$(document).ready(function () {
    $("#botonCargaAutomatica").click(function () {
        automatico = true;
        alert(automatico);
    });

    if (automatico == true) {
        mostrarNoticiaOnScroll();
    }
});

function cargarNoticias() {


    $("#botonCargaAutomatica").click(function () {
        automatico = (automatico + 1) % 2;
        alert(automatico);
    });

    if (automatico == 1) {
        mostrarNoticiaOnScroll();
    }
}

//imprime por pantalla la la noticia junto con las etiquetas html correspondientes
function mostrarNoticia(json) {
    $.each(json, function (i, item) {
        $(".noticias").append(
            '<div class="col-sm-6 noticia">'
            + '<div class="jumbotron">'
            + '<h2 class="titular">' + item.empleado + '</h2>'
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
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 20) {

            $.getJSON("https://rawgit.com/urbinapro/news/master/data/names.json", function (jsonObject) {
                //en aquest punt l'objecte jsonObject correspon al fitxer
                mostrarNoticia(jsonObject);
            });
        }
    })
}