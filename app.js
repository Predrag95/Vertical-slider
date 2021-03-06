const slidesContainer = document.querySelector('.slides-container');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const buttonUp = document.querySelector('.button-up');
const buttonDown = document.querySelector('.button-down');
const slidesLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0; 

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

buttonUp.addEventListener('click', () => slidesChange('up'));
buttonDown.addEventListener('click', () => slidesChange('down'));

function slidesChange(direction) {
  const sliderHeight = slidesContainer.clientHeight;

  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}

