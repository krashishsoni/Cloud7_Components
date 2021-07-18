$.validator.setDefaults({
    submitHandler: function() {
        alert("submitted!");
    }
});

$().ready(function() {

    $("#contactForm").validate({
        rules: {
            name: "required",

            msg_subject: "required",


            // password: {
            //     required: true,
            //     minlength: 6

            // },
            // confirm_password: {
            //     required: true,
            //     minlength: 5,
            //     equalTo: "#password"
            // },
            email: {
                required: true,
                email: true
            },

            // dateofbirth: {
            //     required: true,
            //     date: true
            // },
            phone_number: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            message: "required",
            msg_subject: {
                required: true
            }


        },
        messages: {
            name: "Please enter your name",
            message: "Please enter your msessage",
            msg_subject: "Please enter your subject",


            // password: {
            //     required: "Please provide a password",
            //     minlength: "Your password must be at least 5 characters long"

            // },
            // confirm_password: {
            //     required: "Please provide a password",
            //     equalTo: "Please enter the same password as above"

            // },
            email: "Please enter a valid email address",

            phone_number: {
                required: "Please enter Phone Number"

            }


        }
    });

});