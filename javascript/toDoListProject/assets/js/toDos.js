// check off specific todos by clicking
$("ul").on("click", "li", function () {
  //if li is gray
  $(this).toggleClass("completed");
});

// click on x to delete to do
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // grabbing new todo text from input box
    let toDoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${toDoText}</li>`);
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
})