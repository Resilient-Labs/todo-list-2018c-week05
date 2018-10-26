document.getElementById('previous').onclick = previous;
document.getElementById('next').onclick = next;

var carousel = ['css/img1.jpg', 'css/img2.jpg', 'css/img3.jpg', 'css/img4.jpg', 'css/img5.jpg', 'css/img6.jpg', 'css/img7.jpg'];
var image = document.getElementById('img');
var i = 0;

function previous() {
  i--;
  if (i < 0) {
    i = carousel.length - 1;
  }
  image.src = carousel[i];
  console.log(carousel[i]);
}

function next() {
  i++;
  if (i === carousel.length) {
    i = 0;
  }
  image.src = carousel[i];
  console.log(carousel[i]);
}


