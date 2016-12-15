/**
 * Created by Tobias Heinrichs on 11/2/2016.
 */
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(document).ready(function() {
    $("#changeClick").click(function () {
        $("#change").text("Hello world!");
    });
});
$('img[usemap]').rwdImageMaps();

$("#id1").on('mousemove', function(e) {
    $("#projekt1").css({top: e.clientY, left: e.clientX });
    $('[data-toggle="tooltip"]').tooltip('show')
});


$(function(){
    $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        content: function () {

            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {

        var x = e.pageX;
        var y = e.pageY;
        $('.popover')
            .css('left', (x+10) + 'px')
            .css('top', (y +10) + 'px');
        $("[rel=popover]").not(e.target).popover("hide");
        e.preventDefault();
    });
});
