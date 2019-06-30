var h = $('.sea').width();
for(var i = 0; i < h; i++){
    var flagElement = $("<div class='sea-element'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('-webkit-animation-delay', i * 10 + 'ms');
    flagElement.css('-moz-animation-delay', i * 10 + 'ms');
    flagElement.css('-ms-animation-delay', i * 10 + 'ms');
    flagElement.css('animation-delay', i * 10 + 'ms');
    $('.sea').append(flagElement);
}