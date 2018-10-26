/*
Morning Challenge: Create a simple app where a teacher can enter student names as they arrive at class. The teacher should have the ability to press a button and see a list off all the students who have arrived.*/


// When I click I want student names to show up on my browser
$("#add").on("click", function () {
  //get text info from input
  var info = $('.students').val();
  $('.students').val("");
  // make student names appear invisible when they are rendered on the browser
  $("ul").append(`<li class="hide"> ${info} </li>`);
  console.log(info);
});

// Make students names visible when "show students" button is pushed
$(document).ready(function () {
  $("#hide").click(function () {
    $("li").hide();
  });
  $("#show").click(function () {
    $("li").show();
  });
});

