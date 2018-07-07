/**
 * CONTACT FORM ALERT ANIMATION SUBROUTINE
 * @summary Controls Alerts Popups
 * @author Cliff Crerar
 * Created at     : 2018-04-09 23:07:07 
 * Last modified  : 2018-07-06 23:01:09
 */

module.exports = (alertType) => {
    $(alertType).slideDown();
    setTimeout(() => {
        $(alertType).slideUp();
    }, 5000);
    $('.alert').on('click', (ev) => {
        //console.log($(ev.currentTarget));
        $(ev.currentTarget).slideUp();
    });
};
