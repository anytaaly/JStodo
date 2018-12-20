//Check off the specific Todos by clicking
$("li").click(function() {
  $(this).toggleClass("completed");
  console.log("clicked");
});
