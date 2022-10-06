const header = document.querySelector('header');
let topButton = document.querySelector('#topBtn');

window.onscroll = function () {
    scrollFunction();
  };
  
  const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('active');
      topButton.style.display = 'block';
    } else {
      header.classList.remove('active');
      topButton.style.display = 'none';
    }
  };
  
const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
topButton.addEventListener('click', getToTop);