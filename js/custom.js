$(document).foundation();
$(function(){
    var sizeMaps = function() {
        var w = Math.min(1000,$(window).width());
        $(".hero h1")
           .css("padding-left", (w*0.015)+"px")
           .css("font-size",    (w*0.12)+"px")
           .css("line-height",  (w*0.11)+"px");
        $(".hero h2")
           .css("top",          (w*0.11)+"px")
           .css("padding-left", (w*0.02)+"px")
           .css("font-size",    (w*0.059)+"px")
           .css("line-height",  (w*0.059)+"px");
        if (w > 768) { w = w/3;} else { w = 333;}
        $(".map-stack")
           .css("font-size", (w-31)+"px")
           .css("width",     (w-31)+"px")
           .css("height",    (w-31)+"px");
        $(".legend").css("width", (w-31)+"px");
        if ($("#example-maps .large-8").offset().left === $("#example-maps .large-4").offset().left) {
           $("#example-maps .large-4").height("auto");
           $("#example-maps .large-4 figure").last().css("position","static");
        } else {
           $("#example-maps .large-4").height($("#example-maps .large-8").height());
           $("#example-maps .large-4 figure").last().css("position","absolute").css("bottom","0");
        }
        w = $(".bullet-item.glyph").width();
        $(".bullet-item.glyph").css("font-size",w+"px").css("line-height",w+"px");
    };
    sizeMaps();
    $(window).resize(sizeMaps);
});
