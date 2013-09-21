var url = "http://placekitten.com/";

$(document).ready(function () {
    generate_kitten($(window).width(), $(window).height());
    setInterval(function () {
        generate_kitten($(window).width(), $(window).height());
    }, 5000);
});

window.onresize = function () {
    $("#image-preload").attr('src', url + $(window).width() + "/" + ($(window).height() + get_rand()) + "?" + get_rand());
}

function generate_kitten(width, height) {
    $("#image").fadeOut();
    if ($('#image-preload').length > 0) {
        $("#image").attr('id', 'image-old');
        $("#image-preload").attr('id', 'image');
        $("#image-old").attr('id', 'image-preload');
        $("#image-preload").attr('src', url + width + "/" + (height + get_rand()) + "?" + get_rand());
    } else {
        $("#image").attr('src', url + width + "/" + (height + get_rand()) + "?" + get_rand());
        $('#content').append('<img id="image-preload" src=' + url + width + "/" + (height + get_rand()) + "?" + get_rand() + ' style="display:hidden;">');
    }
    $("#image").fadeIn();
}

function get_rand() {
    var l = Math.floor((Math.random() * 30) + 1);
    console.log(l);
    return l;
}