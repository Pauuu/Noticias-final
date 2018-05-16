

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 10) {  /*miar bien como va lo del espacio*/

            $.getJSON("https://cdn.rawgit.com/Pauuu/Noticias-final/2cd0807f/data/data1.json", function (jsonObject) {
                //en aquest punt l'objecte jsonObject correspon al fitxer
                pintarNoticias(jsonObject);
            });
            
        }
    })
});

function pintar(json) {
    $.each(json, function (i, empleado) {
        $("#out").append("<li id='" + i + "'>" + empleado.firstName + " " + empleado.lastName + "</li>");
    });
}

function pintarNoticias(json) {
    $.each(json, function (i, noticia) {
        $(".noticias").append(
            '<div class="col-sm-6 noticia">'
            + '<div class="jumbotron">'
            + '<a href="news3.html" id="news3">'
            + '<h2>' + + '</h2>'
            + '<span>' + '<img>' + '</span>' //imagen
            + '<br>'
            + '<span>' + + '<span>' //fecha
            + '<p>' + + '</p>' //descripción
            + '</div>'
            + '</div>'
        );
    });
}