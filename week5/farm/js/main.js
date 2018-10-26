var circle = document.getElementsByClassName('circle')[0];
var triangle = document.getElementsByClassName('triangle')[0];
var square = document.getElementsByClassName('square')[0];

var soundOne = document.getElementsByTagName('audio')[0];
var soundTwo = document.getElementsByTagName('audio')[1];
var soundThree = document.getElementsByTagName('audio')[2];

var height = document.body.clientHeight;
var width = document.body.clientWidth;

circle.addEventListener('click', function () {
  var y = Math.floor(Math.random() * height);
  var x = Math.floor(Math.random() * width);

  circle.style.top = y + 'px';
  circle.style.left = x + 'px';
  console.log(x + 'px');
  console.log(y);
  soundOne.play();
});

triangle.addEventListener('click', function () {
  var y = Math.floor(Math.random() * height);
  var x = Math.floor(Math.random() * width);

  triangle.style.top = y + 'px';
  triangle.style.left = x + 'px';
  console.log(x + 'px');
  console.log(y);
  soundTwo.play();
});

square.addEventListener('click', function () {
  var y = Math.floor(Math.random() * height);
  var x = Math.floor(Math.random() * width);

  square.style.top = y + 'px';
  square.style.left = x + 'px';
  console.log(x + 'px');
  console.log(y);
  soundThree.play();
});




