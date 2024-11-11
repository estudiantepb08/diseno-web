$(document).ready(function() {

    var sliderIncremet = 1;
    var resetLoop = false;
    var cantidadImg = $("#slider ul li").length;

    $("#slider ul").css({ "width": (cantidadImg * 100) + "%" });
    $("#slider ul li").css({ "width": (100 / cantidadImg) + "%" });

    /***********************
    Codigo slider  
     ************************/
    $("#indicator li").click(function() {

        var itemSlider = $(this).attr("slider-item");

        $("#slider ul li").css({ "display": "none" });

        $("#slider ul li:nth-child(" + itemSlider + ")").fadeIn();

        $("#indicator li").css({ "opacity": ".5" });

        $(this).css({ "opacity": "1" });

        resetLoop = true;

        sliderIncremet = itemSlider;
    });

    /*************************
    Codigo flechas
    ***************************/
    function siguiente() {

        if (sliderIncremet >= cantidadImg) {
            sliderIncremet = 1;
        } else {
            sliderIncremet++;
        }

        $("#slider ul li").css({ "display": "none" });

        $("#slider ul li:nth-child(" + sliderIncremet + ")").fadeIn();

        $("#indicator li").css({ "opacity": ".5" });

        $("#indicator li:nth-child(" + sliderIncremet + ")").css({ "opacity": "1" });

        resetLoop = true;
    }

    $("#right").click(function() {

        siguiente();
        resetLoop = true;

    });

    $("#left").click(function() {

        if (sliderIncremet <= 1) {
            sliderIncremet = cantidadImg;
        } else {
            sliderIncremet--;
        }

        $("#slider ul li").css({ "display": "none" });

        $("#slider ul li:nth-child(" + sliderIncremet + ")").fadeIn();

        $("#indicator li").css({ "opacity": ".5" });

        $("#indicator li:nth-child(" + sliderIncremet + ")").css({ "opacity": "1" });

        resetLoop = true;
    });

    /**
     * slider automatico loop
     */
    setInterval(function() {
        if (resetLoop) {
            resetLoop = false;
        } else {
            siguiente();
        }

    }, 3000);

    /******
    Codigo menu posicion fija 
    *******/
    var altura = $('.menu').offset().top;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });
});