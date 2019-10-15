$(document).ready(function () {
  $('#menu-nav').click(function () {
    $('.menu-overlay').toggleClass("active");
    $(this).toggleClass("active");
  });

  var typed = new Typed('.typed ', {
    strings: ["/WE CREATE IDEAS <br> CONNECTED BRAND <br> WITH PEOPLE"],
    typeSpeed: 100,
    startDelay: 20,
    loop: true,
    backSpeed: 40,
    backDelay: 2000,
  });
})