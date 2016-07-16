$(function(){

	$('#message-form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			message:{
				required: true
			}
		},
		 messages: {
            email: {
                required: '* Mandatory field e-mail!'
            },
            name: {
                required: '* Mandatory field name!',
                minlength: 'Name shouldn&#39;t be shorter than 2 symbols.'
            },
            message: {
            	required: '* Please enter your message!',
            }
        },
        submitHandler: function(form) {
        	alert('Thanks for your message!');
    		$(form).ajaxSubmit();
    	}
	});

});