$("h1").addClass("title");

$("button").eq(2).html("<em>Don't Click me!</em>");

$("a").attr("href", "http://google.com");

$(document).keypress(function (event) {
    $("h1").text(event.key);
})

$("button").on("click", function () {
    $("h1").slideToggle().animate({opacity: 0.5});
})