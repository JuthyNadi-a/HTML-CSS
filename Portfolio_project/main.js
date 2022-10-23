const header = document.querySelector('header');
let topButton = document.querySelector('#topBtn');
const img = document.querySelector('#myImg');
let currentImgIdx = 1;
const images = [
            'assets/shopping_cart.png',
            'assets/book_archive.png',
            'assets/football_page.png',
            'assets/gradient_generator.png',
            'assets/speedgame.png'
        ]; 
window.onscroll = function () {
    scrollFunction();
  };

/* Srolling function */
const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('active');
    topButton.style.display = 'block';
  } else {
    header.classList.remove('active');
    topButton.style.display = 'none';
  }
};
/* Front arrow function */
const changeImageFront = () => {
  // If current idx exceeds images array
  // length, reset it to 0 again
  if(currentImgIdx >= images.length){
      currentImgIdx = 0;
  }
  img.src = images[currentImgIdx];
  // Increment current image idx by 1
  currentImgIdx++;
} 
/* Back arrow function */
const changeImageBack = () => {
  // If current idx exceeds images array
  // length, reset it to 0 again
  if(currentImgIdx >= images.length){
      currentImgIdx = 0;
  }
  img.src = images[currentImgIdx];
  // Decrement current image idx by 1
  currentImgIdx--;
}
/* Get to top */
const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
topButton.addEventListener('click', getToTop);