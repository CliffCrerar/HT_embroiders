/**
 * WEB CONTACT FORM COMMUNICATION OPERATION
 * @summary This file handles the communications sent from the client
 * @author Cliff Crerar
 * Created at     : 2018-04-08 18:11:45 
 * Last modified  : 2018-07-06 23:33:52
 */

const showAlert = require('./_alerts'); // get alert controls
// declare mail validation patternn
var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var port = 8025;
var url = 'http://' + IP + ':' + port;
const sendMail = data => {
    $.ajax({
        url: url,
        method: 'POST',
        origin: '*',
        contentType: 'text/plain',
        //headers: ({'Content-Type:','Access-Control-Allow-Origin':'*'}),
        data: JSON.stringify(data),
        dataType: 'text',
        timout: 10000,
        success: (response, status) => {
            console.log(response);
            console.log(status);
        },
        error: (err, xhr, third) => {
            console.log(err);
            console.log(xhr);
            console.log(third);
        }
    });
};

module.exports = formData => {
    //console.log(data);
    var validEmail = formData.email.match(pattern);
    //console.log('validmail ',validEmail);

    if (validEmail == null || formData.email == '' || formData.msg == '') {
        $('#email').css('border-color', 'red');
        $('#msg').css('border-color', 'red');
        // alert('MESSAGE NOT SENT \n Please enter your email address and name.');
        showAlert('#AlertEmail');
    } else {
        //alert('Message sent');
        console.log(formData);
        sendMail(formData);
        showAlert('#AlertSent');
    }
};
