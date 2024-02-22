const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.links');

function activateMenu() {
    const index = sections.findIndex(section => window.scrollY >= section.offsetTop - 45);

    links.forEach(link => link.classList.remove('active'));
    links[index].classList.add('active');
}

window.addEventListener('scroll', activateMenu);
activateMenu();

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop - 45;

        scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});