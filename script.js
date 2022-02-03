$(".box-btn").click(function () {
  $(".box-btn").removeClass("btn-active");
  $(this).addClass("btn-active");
});

$("#skills-btn").click(function () {
  $(".window-content").hide();
  $("#skills").show();
});
$("#tools-btn").click(function () {
  $(".window-content").hide();
  $("#tools").show();
});
$("#cert-btn").click(function () {
  $(".window-content").hide();
  $("#certificates").show();
});
