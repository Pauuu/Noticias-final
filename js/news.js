
$.getJSON("https://rawgit.com/urbinapro/news/master/data/names.json", function (jsonObject) {
    //en aquest punt l'objecte jsonObject correspon al fitxer
    pintar(jsonObject);
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $("#contenido").append('Hola que tal');
        }
    })
});

function pintar(json) {
    $.each(json, function (i, empleado) {
        $("#out").append("<li id='" + i + "'>" + empleado.firstName + " " + empleado.lastName + "</li>");
    });
}