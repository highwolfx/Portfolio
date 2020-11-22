$(document).ready(welcome());
externalPortfolioLink();
picturePortfolioModal();

function welcome(){
    $("#welcome-en").fadeIn(2000);
    $("#welcome-cn").delay(2000).fadeIn(2000);
    $("#welcome-jp").delay(4000).fadeIn(2000);
};

function externalPortfolioLink(){
    $(".coding-portfolio").each(function(index){
        $(this).on("click", function(){
            window.open($(this).find('a').attr('href'));
        });
    });
};

function picturePortfolioModal(){
    $(".picture-portfolio").each(function(index){
        $(this).on("click", function(){
            let source = $(this).find('img').attr('src');
            let title = $(this).find('img').attr('alt');
            $('#pictureModal').modal('toggle');
            $('#ModalLabel').text(title);
            $(".modal-body").empty();
            $(`<img id='${title}'>`).attr('src', source).addClass('modal-picture').appendTo(".modal-body");
        });
    });
};