    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    // Display Mobile Menu
    const mobileMenu = () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }

    menu.addEventListener('click', mobileMenu);

    // Smooth scrolling
    const links = document.querySelectorAll(".navbar__menu a");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    //Show active menu when scrolling 
    const highlightMenu = () => { 
        const elem = document.querySelector('.highlight')
        const homeMenu = document.querySelector('#home-page')
        const aboutMenu = document.querySelector('#about-page')
        const servicesMenu = document.querySelector('#services-page')
        let scrollPos = window.scrollY

        //adds 'highlight' class to my menu items
        if (window.innerWidth > 960 && scrollPos < 600) {
            
        }
    }