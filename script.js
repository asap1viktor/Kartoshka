const menuButton = document.querySelector('.menu__button'),
      nav = document.querySelector('nav'),
      menuStick = document.querySelectorAll('.menu__stick');


      
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