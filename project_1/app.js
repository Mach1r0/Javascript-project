    const menu = documento.querySelector('#mobile-menu');
    const menuLinks = documento.querySelector('.navvar__menu');

    // Display Mobile Menu
    const mobileMenu = () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }

    menu.addEventListener('click', mobileMenu);
