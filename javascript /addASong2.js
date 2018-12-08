$(document).ready(function(){
    $("add-writer").click(function(){
        $("body").append($("p:first").clone(true));
    });
    $(".writers-block").click(function(){
        $(this).animate({fontSize: "+=1px"});
    });
});