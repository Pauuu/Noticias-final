

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 10) {  /*miar bien como va lo del espacio*/

            $.getJSON("https://rawgit.com/urbinapro/news/master/data/names.json", function (jsonObject) {
                //en aquest punt l'objecte jsonObject correspon al fitxer
                mostrarNoticia(jsonObject);
            });
            
        }
    })
});

function mostrarNoticia(json) {
    $.each(json, function (i, item) {
        $(".noticias").append(
            '<div class="col-sm-6 noticia">'
            + '<div class="jumbotron">'
            + '<h2>' + item.empleado + '</h2>'
            + '<span>' + '<img>' + '</span>' //imagen
            + '<br>'
            + '<span>' + + '<span>' //fecha
            + '<p>' + + '</p>' //descripción
            + '</div>'
            + '</div>'
        );
    })
}