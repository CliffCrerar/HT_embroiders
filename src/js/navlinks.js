/**
 * NAVLINKS BEHAVIOUR
 * @summary How navlinks behave for desktop and mobile
 * @author Cliff Crerar
 * Created at     : 2018-06-18 16:53:41
 * Last modified  : 2018-06-18 17:31:13
 */

// Mobile nav on click event
const navLinksShow = () => {
    console.log('NavLinks Click');
    $('#nav-right').toggleClass('nav-right-show', 1000, 'easeOutSine');
    /*

console.log($('#nav-right').hasClass('show'));
if ($('#nav-right').hasClass('show')) {
$('#nav-right').css('display', 'none').removeClass('show');
} else {
$('#nav-right').css('display', 'flex').addClass('show');
}
//$('#nav-right').css('display', 'flex'); */
};

module.exports = navLinksShow;