// check off specific todos by clicking
$("li").click(function () {
  //if li is gray
  $(this).toggleClass("completed");
});

// click on x to delete to do
$("span").click(function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});
