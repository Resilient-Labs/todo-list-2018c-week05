//**
// Build a to do list:
//
// Unorder List and Listed Items are needed
// <ul>
// <li></li>
// </ul>
// Prevent the page from refreshing every time you are entering in an item in the input sections.
//*


$(document).ready(function(){
  var input = $('#input').val();
  var length = $('li').length;
  $('#number').html(length);
  console.log(input);
  // Set number to 0 -> "you have <blank?> items left to do"


// Behavior when add button is clicked
$('#add').on('click', function(){
    $('#list').append('<li class="new">' + $('#input').val() + '</li>');
    length++;
    console.log(length);
    $('#number').html(length);
})

// Behavior when clear list button clicked
$('#clear').on('click', function(){
  $('#list').empty();
  $('#number').html("0");
})

// Behavior for when list item is clicked
$('#list').on('click',".new", function(){
  $(this).toggleClass("new");
})
// Color turns gray
// Text decoration strikethrough
// this = <li class="new"></li>
// $(this) = { class = "new", remove: function () {}, }


// Behavior when clear complete is clicked

$('#complete').on('click', function(){
$( "#list li" ).not(".new").remove();
$('#number').html($('li').length)
// clearing complete doesn't change the "You have items left"
// Remove li from ul
})

})
