// check off specific todos by clicking
$("li").click(function() {
  $(this).css("color", "grey");
  $(this).css("text-decoration", "line-through");
});