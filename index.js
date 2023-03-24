const images = document.querySelectorAll('.carousel img');

let index = 0;

function showImage() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
  setTimeout(showImage, 5000);
}

images[index].classList.add('active');
setTimeout(showImage, 5000);