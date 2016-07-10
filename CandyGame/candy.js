'use strict';

var candyNum = 0;
var lollipopNum = 0;
var candyNumContainer = document.querySelector('.candy_nums');
var candyButton = document.querySelector('.button_candy');
var lollipopButton = document.querySelector('.button_lollipop');
var lollipopNumContainer = document.querySelector('.lollipop_nums');

showNumbers();

function createCandy() {
  candyNum++;
}

function showNumbers() {
  var counter = document.createElement('p');
  candyNumContainer.appendChild(counter);
  candyNumContainer.textContent = candyNum;
  lollipopNumContainer.textContent = lollipopNum;
}

function buyLollipop() {
  if (candyNum >= 10) {
    candyNum -= 10;
    lollipopNum ++;
  }
}

function getBonusCandies() {
  var szam = (Math.floor(lollipopNum / 2));
  candyNum += szam;
}

setInterval(function() {
  if (lollipopNum >= 2) {
    getBonusCandies();
    showNumbers();
  }
}, 1000);

candyButton.addEventListener('click', function () {
  createCandy();
  showNumbers();
  console.log(candyNum);
})


lollipopButton.addEventListener('click', function () {
  buyLollipop();
  showNumbers();
  console.log(candyNum);
});
