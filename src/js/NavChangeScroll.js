/**
 * Changing front page to nav
 * @summary Changes the front page objects into a navbar
 * @author Cliff Crerar
 * Created at     : 2018-06-05 22:07:04 
 * Last modified  : 2018-06-09 15:17:21
 */

let pageToNav = 0;
$(window).scroll(function (event) {
    const IH = window.innerHeight;
    const scrollY = window.scrollY;
    //console.log(IH, scrollY);
    /*
    if (scrollY > (IH / 2) && pageToNav === 0) {
        console.log('fire event nav');
        pageToNav = 1;
        $('.nav-left').removeClass('nav-left-1').addClass('nav-left-2');
        $('.nav-needle-img').hide();
        setTimeout(() => {
            $('.nav-needle-img').fadeIn('slow');
        }, 1000);
        $('.nav-needle-img').removeClass('nav-needle-img-1').addClass('nav-needle-img-2');
        $('.navbar').css('background', 'rgba(0,0,0,0.7)');
    } else if (scrollY < (IH / 2) && pageToNav === 1) {
        console.log('fire event page');
        pageToNav = 0;
        $('.nav-left').removeClass('nav-left-2').addClass('nav-left-1');
        $('.nav-needle-img').removeClass('nav-needle-img-2').addClass('nav-needle-img-1');
        $('.navbar').css('background', 'rgba(0,0,0,0.0)');
    }
    */
});