$(function () {
  //ページ内遷移
  $("a[href^=#]").click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  //スクロールしたらヘッダー背景白
  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (10 < top) {
      $("header").css("background-color", "rgba(255,255,255,0.9)");
    } else {
      $("header").css("background-color", "rgba(0,0,0,0)");
    }
  });
  $(function () {
    $(".ham-btn").on("click", function () {
      $(".ham").toggleClass("active");
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  });
});
