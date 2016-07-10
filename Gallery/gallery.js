'use strict';

var imagesList = [
  { src: 'images/01.png', name: 'image1' },
  { src: 'images/02.png', name: 'image2' },
  { src: 'images/03.png', name: 'image3' },
  { src: 'images/04.png', name: 'image4' },
  { src: 'images/05.png', name: 'image5' },
  { src: 'images/06.png', name: 'image6' },
  { src: 'images/07.png', name: 'image7' },
  { src: 'images/08.png', name: 'image8' },
];
// setUp section:
var bigImageIndex = 2;
var thumbPicIndex = 0;

var imagesNum = imagesList.length;

var bigImageContainer = document.querySelector('.big_img');
var bigImage = document.createElement('img');
bigImage.setAttribute('src', imagesList[bigImageIndex].src);
bigImageContainer.appendChild(bigImage);

var imageName = document.querySelector('h3');
imageName.textContent = 'image3';

var thumbnailContainer = document.querySelector('.thumbnails');

showThumbnailPics();

// kirajzolja az also thumbnaileket:
thumbnailContainer.addEventListener('click', function (event) {
  bigImage.setAttribute('src', event.target.src);
  bigImageIndex = parseInt(event.target.getAttribute('data-id'));
  imageName.textContent = imagesList[bigImageIndex].name;
  showThumbnailPics();
});


function showThumbnailPics() {
  thumbnailContainer.innerHTML = '';
  for (var i = thumbPicIndex; i <= thumbPicIndex + 4; i++) {
    var index = i % imagesNum;
    var newThumbImage = document.createElement('img');
    newThumbImage.setAttribute('src', imagesList[index].src);
    newThumbImage.setAttribute('data-id', index);
    newThumbImage.classList.add('fade');
    thumbnailContainer.appendChild(newThumbImage);
    if (newThumbImage.src === bigImage.src) {
      newThumbImage.classList.remove('fade');
    }
  }
}

// big arrows section:
var bigRightArrow = document.querySelector('.arrow_right');
var bigLeftArrow = document.querySelector('.arrow_left');

var arrowLeft = document.createElement('img');
arrowLeft.setAttribute('src', 'images/left.png');
bigLeftArrow.appendChild(arrowLeft);

var arrowRight = document.createElement('img');
arrowRight.setAttribute('src', 'images/right.png');
bigRightArrow.appendChild(arrowRight);

function clickArrowRight() {
  if (bigImageIndex === (imagesList.length) - 1) {
    bigImageIndex = 0;
  } else {
    bigImageIndex ++;
  }
}

function clickArrowLeft() {
  if (bigImageIndex > 0) {
    bigImageIndex --;
  } else {
    bigImageIndex = (imagesList.length) - 1;
  }
}

function showNextBigImage() {
  console.log(bigImageIndex);
  bigImage.setAttribute('src', (imagesList[bigImageIndex]).src);
  imageName.textContent = (imagesList[bigImageIndex]).name;
}

bigRightArrow.addEventListener('click', function () {
  clickArrowRight();
  showNextBigImage();
  showThumbnailPics();
});

bigLeftArrow.addEventListener('click', function () {
  clickArrowLeft();
  showNextBigImage();
  showThumbnailPics();
});


// thumbnail arrows section:

var smallLeftButtonContainer = document.querySelector('.small_button_left');
var smallArrowLeft = document.createElement('img');
smallArrowLeft.setAttribute('src', 'images/left.png');
smallLeftButtonContainer.appendChild(smallArrowLeft);

var smallRightButtonContainer = document.querySelector('.small_button_right');
var smallArrowRight = document.createElement('img');
smallArrowRight.setAttribute('src', 'images/right.png');
smallRightButtonContainer.appendChild(smallArrowRight);

function clickSmallArrowRight() {
  if (thumbPicIndex === (imagesList.length) - 1) {
    thumbPicIndex = 0;
  } else {
    thumbPicIndex ++;
  }
}

function clickSmallArrowLeft() {
  if (thumbPicIndex > 0) {
    thumbPicIndex --;
  } else { thumbPicIndex = (imagesList.length) - 1; }
}

smallRightButtonContainer.addEventListener('click', function () {
  clickSmallArrowRight();
  showThumbnailPics();
});


smallLeftButtonContainer.addEventListener('click', function () {
  clickSmallArrowLeft();
  showThumbnailPics();
});
