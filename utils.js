const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
    const img = new Image();
    img.src = item.style.backgroundImage.slice(4, -1).replace(/\"/g, "");

    img.onload = function(){
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        item.style.paddingBottom = 100/ aspectRatio + "%";
    }
});
