$(document).foundation();
$(window).ready(function() {

   var sizeMaps = function() {
     var w = Math.min(1000,$(window).width());
     if (w > 768) { w = w/3;} else { w = 333;}
     $(".map-stack").css("font-size", (w-31)+"px").css("width",(w-31)+"px").css("height",(w-31)+"px");
     $(".legend").css("width", (w-31)+"px");
     if ($("#example-maps .large-8").offset().left === $("#example-maps .large-4").offset().left) {
       $("#example-maps .large-4").height("auto");
       $("#example-maps .large-4 figure").last().css("position","static");
     } else {
       $("#example-maps .large-4").height($("#example-maps .large-8").height());
       $("#example-maps .large-4 figure").last().css("position","absolute").css("bottom","0");
     }
   };
   sizeMaps();
   $(window).resize(sizeMaps);

});
