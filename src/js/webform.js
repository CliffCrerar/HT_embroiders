/**
 * WEBFORM OPERATION
 * @summary Captures data input from web contact form and passes on for communication with mail relay service
 * @author Cliff Crerar
 * Created at     : 2018-07-06 23:10:12 
 * Last modified  : 2018-07-06 23:29:16
 */

import sendmail from './_sendmail';

$('#sendMail').on('click', (ev) => {
    console.log('Send mail');
    var formData = {
        email: $('#email').val(),
        msg: $('#msg').val()
    };
    sendmail(formData);
});