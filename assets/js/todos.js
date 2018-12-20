//Check off the specific Todos by clicking
$("li").click(function() {
  $(this).toggleClass("completed");
});

//Delete the todo from the list on clicking delete button.
$(".delete").click(function(e) {
  $(this)
    .parent()
    .remove();
  e.stopPropagation();
});
