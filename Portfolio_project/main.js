const header = document.querySelector('header');

window.onscroll = function () {
    scrollFunction();
};
const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
    header.classList.add('active');
    } else {
        header.classList.remove('active')
    }
}