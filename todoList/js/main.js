

// Cross off li using the toggleClass event
$("ul").click(function () {
  $("li").toggleClass("stroked");
});

//Click icon to delete
$("ul").on("click", ".delete", function (e) {
  count--;
  //Here we're using the parent to delete this element
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
    $('#num').html(count);
  });
  e.stopPropagation();
});


// Add text to screen from input

var count = 0;


$(".add").on("click", function () {
  count++;
  //get text info from input
  var info = $('#task').val();
  $('#task').val("");
  //render li with icon 
  $('#num').html(count);
  $("ul").append(
    `<li><span class="delete"><i class='fa fa-trash delete-item'></i></span><span class="edit"><i class="fas fa-edit"></i></span> ${info} </li>`);
});

// $(".archive").on("click", function () {

//   var user = JSON.parse(localStorage.getItem('.listTodo'));
//   localStorage.setItem('.listTodo', JSON.stringify('#task
//   '));
// });

$("ul").on("mouseleave", "li", function () {
  $(".fa-edit,.fa-trash").hide();
})

$("ul").on("mouseenter", "li", function () {
  $(".fa-edit,.fa-trash").show();
})

$('ul').on('click', '.edit', function () {
  $(this).parent().attr('contenteditable', 'true');
});

$(".deleteAll").click(function () {
  count = 0;
  $("li").remove();
  $('#num').html(count);
});

// Delete text by clicking icon next to list item
$("#toggleForm").click(function () {
  $("input[type='text']").fadeToggle();
});



// localStorage.setItem('.listTodos', JSON.stringify(user));
// var user = JSON.parse(localStorage.getItem('.listTodos'));
// localStorage.clear();