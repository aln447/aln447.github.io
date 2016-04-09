$(document).ready(function(){

    var bg = $("#tbg");
    var box = $(".maincontent");
    var prev = $("#preview");
    var close = $("#close");
    var graf = $("#grafbox");
    var www = $("#wwwbox");
    var img = ''; //predefiniuje img aby nadac globalnosc dla document ready
    var expContent = $("#expcontent");
    var exp = $("#expwww");
    var cont = $("#cont");
    var contbox = $("#contact");
    var closecont = $("#closecont");
    var send = $("#send");
    var winWidth = $(window).width();
    var arrow = $("#arrow");
    var returnt = $("#returntbg");
    //send.on("click", function(){});


    document.addEventListener('backbutton', onBackKeyDown, false);

    function onBackKeyDown(event) {
        event.preventDefault();
        if(contbox.hasClass("cappear")){

            alert("Ajho!");
            contbox.removeClass("cappear");
        }
    }

    cont.on("click", function(){
        contbox.addClass("cappear");
        closecont.show();
    });

    closecont.on("click", function(){
        contbox.removeClass("cappear");
        closecont.hide();
    });


    $("#www").on("click", function(){
        side(www);
    });

    $("#graf").on("click", function(){
        side(graf);
    });



    $(".graffield").on("click", function(){
        img = $(this).children("img").attr("src");
        img = img.replace("img/graf/s/", "img/graf/")
        prev.append("<img src='"+img+"' class='bigimg' alt='preview'>");
        prev.fadeIn(100);
        setTimeout(function(){
            prev.children("img").addClass("scale");
        },3);

    });

    $(document).on('click', '.bigimg', function(){
        window.open(img, '_blank');
  });

    close.on("click", function(){
        prev.children("img").removeClass("scale");
        setTimeout(function(){
            prev.fadeOut(100);
        },100);
        prev.children("img").remove();
    });

    $(".wwfield").hover(function () {
        $(this).children("a").children("video")[0].pause();
    }, function () {
        $(this).children("a").children("video")[0].play();
    });

    $(".thrd").on("click", function(){
        var content = $(this).next().html();
        expContent.html(content);
        exp.addClass("expexpand");
    });

    exp.on("click", function(){
        exp.removeClass("expexpand");
    });

    function side(tab){ //Funkcja przypisująca side
        if(tab.is(":visible")){
            bg.removeClass("side");
            setTimeout(function(){
                tab.hide();
            },300);
            if(winWidth < 670){
                arrow.removeClass("arrowspin");
                box.fadeIn(200);
            }
            return false;
        }
        var tabB;
        if(tab == graf){tabB = www;}
        else{tabB = graf;}
        //Hiding the second one
        if(tabB.is(":visible")){
            tabB.find(".wwfield, .graffield").css("display", "none");
            tabB.hide();
        }
        bg.addClass("side");
        if(winWidth < 670){
            arrow.addClass("arrowspin");
            box.fadeOut(200);
        }
        tab.show();
        if(tab == graf){
            $(".graffield").each(function(e){
                $(this).delay(50*e).fadeIn();
            });
        }else{
            $(".wwfield").each(function(e){
                $(this).delay(50*e).fadeIn();
                $(this).children("a").children("video").get(0).play();
            });
        }
    }


        returnt.on("click", function(){
            if(bg.hasClass("side")){
                bg.removeClass("side");
                if(winWidth < 670){
                    arrow.removeClass("arrowspin");
                    box.fadeIn(200);
                }
                $("#behind").children("div").hide();

            }
        });

});
