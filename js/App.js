$("#toggle").click(function () {
  $(".menu ul").toggleClass("active");
});


//=================Navigation fixed top============

$(window).on("scroll", function () {
  var scrolling = $(this).scrollTop();

  if (scrolling > 10) {
    $(".navigation").addClass("navbar-fixed");
  } else {
    $(".navigation").removeClass("navbar-fixed");
  }

});