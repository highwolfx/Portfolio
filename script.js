$(document).ready(welcome());
externalPortfolioLink();

function welcome(){
    $("#welcome-en").fadeIn(2000);
    $("#welcome-cn").delay(2000).fadeIn(2000);
    $("#welcome-jp").delay(4000).fadeIn(2000);
};

function externalPortfolioLink(){
    $(".carousel-item").each(function(index){
        $(this).on("click", function(){
            console.log($(this));
        })
    })
}