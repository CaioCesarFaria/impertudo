const cardContents = document.querySelectorAll('.card-content');
const saibaMaisLink = document.querySelector('.saiba-mais');

saibaMaisLink.addEventListener('click', () => {
    cardContents.forEach(content => {
        content.classList.toggle('active');
    });
});