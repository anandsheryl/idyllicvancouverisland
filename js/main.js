var btn = document.querySelector('.toggle-button');

btn.addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('show-nav');

    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    let menu = this.nextElementSibling;
});