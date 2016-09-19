works = {
    /*
        works[title][0] - Website/Project Name
        works[title][1] - Description
        works[title][2] - Technologies(array)
        works[title][3] - Href
        works[title][4] - Image - BIG
        works[title][5] - Image - SMALL
    */
    'blizz':[
        'Szablon Blogowy Blizzard',
        '<p>Prosty szablon blogowy stworzony głównie jako ćwiczenie z języka PHP i mySQL. Strona posiada własny podstawowy cms dostępny pod tym linkiem umożliwiający dodawanie i edycje zdjęć i postów. Sama strona posiada własny moduł wyszukiwała postów przez tytuł lub tagi oraz paginacje</p><p>Projekt i wykonanie własne</p>',
        ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Ajax', 'Php5', 'MySQL'],
        'http://blizz-alankrg.rhcloud.com/website/',
        'img/works/blizz-ipad-big.JPG',
        'img/works/blizz-iphone-big.JPG'
    ],
    'mbs16':[
        'Sklep Mobilne Studio 16',
        '<p>Sklep internetowy Mobilnego Studia 16 pozwalał klientom wybierać, rezerwować i płacić za zabiegi pielęgnacyjne. Wszystko oparte o zmodyfikowaną wtyczkę WooCommerce </p><p>Wykonano współpracy z <a href="mailto: arkadiusm@gmail.com">Arkadiusz Mierzwa</a>. Projekt i wykonanie własne </p>',
        ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Ajax', 'Php5', 'Wordpress', 'WooCommerce'],
        'http://mobilnestudio16.pl/',
        'img/works/mbs16-ipad-big.jpg',
        'img/works/mbs16-iphone-big.jpg'
    ],
    'lorem':[
        'Loremville Guest House',
        '<p>Prosta strona-wizytówka dla pensjonatu</p><p>Projekt i wykonanie własne</p>',
        ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
        'http://alankrg.me/Lorem-Guest-House/',
        'img/works/lorem-ipad-big.jpg',
        'img/works/lorem-iphone-big.jpg'
    ]
};
$(document).ready(function() {

    //CHANGE BACKGROUND COLOR ON SCROLLING
    var aboutScrollTop = $("#about-me").offset().top;
    var skillsScrollTop = $("#skills").offset().top;
    var worksScrollTop = $("#works").offset().top;
    var contactScrollTop = $("#contact").offset().top;
    var scroll = 0;

    scrollBgColor();
    $(window).on("scroll", function(){
        scrollBgColor();
    });

    function scrollBgColor(){
        scroll = $(window).scrollTop();

        if(scroll > aboutScrollTop && scroll < skillsScrollTop){
            $("#skills-tint").css("opacity", (scroll-aboutScrollTop)/(skillsScrollTop-aboutScrollTop));
        }

        if(scroll > skillsScrollTop && scroll < worksScrollTop){
            $("#works-tint").css("opacity", (scroll-skillsScrollTop)/(worksScrollTop-skillsScrollTop));
        }

        if(scroll > worksScrollTop && scroll < contactScrollTop){
            $("#contact-tint").css("opacity", (scroll-worksScrollTop)/(contactScrollTop-worksScrollTop));
        }

    }

    //CHANGING ICON COLORS ON HOVER
    $("i").on("mouseover", function(){
        $(this).addClass("colored");
    });
    $("i").on("mouseleave", function(){
        $(this).removeClass("colored");
    });


});

function sideScreen(subject){
    //assign values
    $("#work-title").text(works[subject][0]);
    $("#work-description").html(works[subject][1]);

    var technologies = "";
    for (var i = 0; i < works[subject][2].length; i++){
        technologies += "<li>" + works[subject][2][i] + "</li>";
    }
    $("#work-technologies").html(technologies);

    $("#work-site").attr("href", works[subject][3]);
    $("#ipad-img").attr("src", works[subject][4]);
    $("#iphone-img").attr("src", works[subject][5]);

    //display everything
    $("#main-window").addClass("hide-main");
    $("body").addClass("hide-overflow");
    $("#iphone-img").removeClass("right-padding");
    $("#text-box-inner-container").removeClass("right-padding");
    $("#side-panel").removeClass("right-padding");
}

function sideScreenClose(){
    $("#main-window").removeClass("hide-main");
    $("body").removeClass("hide-overflow");
    $("#iphone-img").addClass("right-padding");
    $("#text-box-inner-container").addClass("right-padding");
    $("#side-panel").addClass("right-padding");
}


//SMOOTH SCROLLING STOLEN FROM CSSTRICKS
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-50
        }, 1000);
        return false;
      }
    }
  });
});
