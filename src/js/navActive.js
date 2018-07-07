/**
 * SETS THE CURRECT SECTION AS ACTIVE
 * @summary Sets the current section in the navbar as active
 * @author Cliff Crerar
 * Created at     : 2018-06-18 20:47:42 
 * Last modified  : 2018-06-18 21:26:06
 */

$(document).ready(function () {
    // $sections incleudes all of the container divs that relate to menu items.
    let $sections = $('.header-section');
    // The user scrolls
    $(window).scroll(function () {
        // currentScroll is the number of pixels the window has been scrolled
        let currentScroll = $(this).scrollTop();
        //console.log('currentScroll: ', currentScroll);
        // $currentSection is somewhere to place the section we must be looking at
        let $currentSection;
        // We check the position of each of the divs compared to the windows scroll positon
        $sections.each(function () {
            // divPosition is the position down the page in px of the current section we are testing      
            let divPosition = $(this).offset().top;
            //console.log('divPosition: ', divPosition);
            // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
            // the -1 is so that it includes the div 1px before the div leave the top of the window.
            if (divPosition - 1 < currentScroll) {
                // We have either read the section or are currently reading the section so we'll call it our current section
                $currentSection = $(this);
                // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
            }
            //console.log('Current section ID: ', $currentSection.attr('id'));
            let id = $currentSection.attr('id');
            $('.nav-a').removeClass('active');
            $('[href="#' + id + '"]').addClass('active');
        });
    });
});