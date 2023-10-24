$(document).ready(function () {
  function t(t) {
    return (
      "<span>" +
      (t = ("00" + t).substr(-2))[0] +
      "</span><span>" +
      t[1] +
      "</span>"
    );
  }
  $("a[href^='#']").click(function () {
    var t = $(this).attr("href");
    return $("html, body").animate({ scrollTop: $(t).offset().top + "px" }), !1;
  }),
    (function e() {
      var o = new Date(),
        n = new Date();
      n.setHours(23),
        n.setMinutes(59),
        n.setSeconds(59),
        23 === o.getHours() &&
          59 === o.getMinutes() &&
          59 === o.getSeconds &&
          n.setDate(n.getDate() + 1);
      var s = Math.floor((n.getTime() - o.getTime()) / 1e3),
        a = Math.floor(s / 3600);
      s -= 3600 * a;
      var r = Math.floor(s / 60);
      (s -= 60 * r),
        $(".timer .hours").html(t(a)),
        $(".timer .minutes").html(t(r)),
        $(".timer .seconds").html(t(s)),
        setTimeout(e, 200);
    })();
}),
  $(window).on("load", function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: !0,
      autoHeight: !0,
      smartSpeed: 300,
      mouseDrag: !1,
      pullDrag: !1,
      dots: !1,
      nav: !0,
      navText: "",
    });
  });
