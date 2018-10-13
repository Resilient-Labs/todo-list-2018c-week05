//Click icon to delete
$("ul").on("click", "span", function (e) {
 //Here we're using the parent to delete this element
 $(this).parent().fadeOut(500, function () {
   $(this).remove();
 });
 e.stopPropagation();
});

//add li
$("input[type='text']").keypress(function (e) {
 if (e.which === 13) { //key code for "enter" button
   //get text info from input
   var info = $(this).val();
   $(this).val("");//resets value form so it is blank
   //icon + EDIT BUTTON
   $("ul").append("<li><span class><i class='fa fa-trash'></i></span>" + info +
   "<button class='edit'>edit</button><input class='hidden' type='text'></li>")
   length()
 }
});

//clear all button
$(".clear").on("click",function(){
  $("li").remove();
  length();
});
//running list
function length(){
  console.log("here");
  $("#total").text($("li").length)
}

$("#toggleForm").click(function() {
 $("input[type='text']").fadeToggle();
});

//hides li when mouse leaves
$("ul").on("mouseleave","li",function() {
  $(".edit,.fa-trash").hide();
})
//shows buttons when mouse enters
$("ul").on("mouseenter","li",function() {
  $(".edit,.fa-trash").show();
})

// $('ul').on('click', '.edit', function () {
//  $(this).parent().attr('contenteditable', 'true');
// });

//EDIT FADE & replace with hidden input
$(".edit").click(function(){
    $(this).hide()
    .siblings(".hidden").show().focus();
});

//HIDE hidden then show
// $(".hidden").focusout(function(){
//     $(this).hide().siblings("original").show().text($(this).val());
// });

// Cross off li using the toggleClass event
// $("ul").on("click", "li", function () {
//  $(this).toggleClass("crossOut");
// });
