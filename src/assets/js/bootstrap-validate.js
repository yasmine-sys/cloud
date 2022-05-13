$(document).ready(function() {
    $('#tryitForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Title: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            }
           
        },
        submitHandler: function(validator, form, submitButton) {
            var fullName = [validator.getFieldElements('firstName').val(),
                            validator.getFieldElements('lastName').val()].join(' ');
            alert('Hello ' + fullName);
        }
    });
});