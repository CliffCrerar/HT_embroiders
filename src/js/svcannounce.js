/**
 * SERVICE ANNOUNCEMENT TRIGGER
 * @summary Triggers the more info announcement on the first services section when the SERVICE navigation is active
 * @author Cliff Crerar
 * Created at     : 2018-07-06 20:48:02 
 * Last modified  : 2018-07-06 23:13:30
 */

var displaying = false; // indicates whether more info announcement is displaying and initially set to false
setInterval(() => { // Interval set to run every 1 second

    // INTERVAL START CYCLE

    /* TURN ON ANINMATION */
    if ($('#navService').hasClass('active') && !displaying) { // if the service nav item is active and announcement is not displayed
        displaying = true; // display is set to true and will be viewable after 5 seconds
        setTimeout(() => {
            $('#svc-mi').addClass('svc-more-info-animate'); // add inimation class to announcement
        }, 5000);
    }

    /* TURN OFF ANINMATION */
    if (!$('#navService').hasClass('active') && displaying) { // if service nav item is NOT active and annoucement is displaying
        $('#svc-mi').removeClass('svc-more-info-animate'); // remove animation css class
        displaying = false; // set display to false
    }

    // INTERVAL END CYCLE

}, 1000);
