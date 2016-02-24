    jQuery(function($) {

        // detect focus over each input
        $('.jm-field-input').focus(function() {
            // add class
            $(this).parent().addClass('is-focused');
        })

        $('.jm-field-input').blur(function() {
            // remove class
            $(this).parent().removeClass('is-focused');
        })


    })