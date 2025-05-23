const menuButton = document.querySelector('.menu__button'),
      nav = document.querySelector('nav'),
      menuStick = document.querySelectorAll('.menu__stick'),
      menuLink = document.querySelectorAll('.menu__link'),
      section = document.querySelectorAll('section'),
      contactsContent = document.querySelector('.contacts__content');
      
menuButton.addEventListener('click', () => {
    if (nav.style.height == '12vw') {
        nav.style.cssText = 'height: 0vw;';
        menuStick.forEach (function(i){
            i.classList.remove('menu__stick_position-absolute');
        })
        menuStick[0].style.cssText = 'transform: rotate(0deg); transition-duration: 0;';
        menuStick[1].style.cssText = 'opacity: 1;';
        menuStick[2].style.cssText = 'transform: rotate(0deg); transition-duration: 0;';
    }
    else {
        nav.style.cssText = 'height: 12vw;';
        menuStick.forEach (function(i){
            i.classList.add('menu__stick_position-absolute');
        })
        menuStick[0].style.cssText = 'transform: rotate(45deg); transition-duration: 0.5s;';
        menuStick[1].style.cssText = 'opacity: 0;';
        menuStick[2].style.cssText = 'transform: rotate(-45deg); transition-duration: 0.5s;';
    }
});

menuLink[2].addEventListener('click', () => {
    window.scrollTo({
        top: section[1].offsetTop,
        left: 0,
        behavior: "smooth"
    });

});

function apiActive() {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    let contacts = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactsContent.style.cssText='transform: translate(0, 0); opacity: 1;';
            }
            else {
                contactsContent.style.cssText='transform: translate(0, 20vh); opacity: 0;';
            }
        });
    };
    //Наблюдатель
    let observerMonsters = new IntersectionObserver(contacts, options);
    //Определяем элементы за которыми наблюдаем
    let targetMonsters = section[1];
    observerMonsters.observe(targetMonsters);
}
