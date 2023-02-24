const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

// navToggle.addEventListener('click', () => {
//     nav.classList.toggle('nav--visible');
// })

const toggleDropdown = () => {
    nav.classList.toggle('nav--visible');
}

navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener('click', () => {
   if (nav.classList.contains('nav--visible')){
    toggleDropdown();
   }
});



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

