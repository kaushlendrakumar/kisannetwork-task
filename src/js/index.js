$(document).ready(function(){
	myMap();
	/*Goole maps load*/
	function myMap() {
		var mapProp= {
		    center:new google.maps.LatLng(28.452535, 77.091271),
		    zoom:5,
		};
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
	
	/*click on send button message*/
	$('#send_form_data').click(function(){
		var status = 0;
		var subject = $('#form_data_subject').val();
		var message = $('#form_data_message').val();
		$('#form_data_subject,#form_data_message').css({'border':'1px solid silver'});
		if(subject == "" && message == ""){
			$('#form_data_subject,#form_data_message').css({'border':'1px solid red'});
			alertWindowFnFast('error', 'topRight', '<b>Please Enter Subject & message</b>');
			status = 1;
		}
		else if(subject == "" && message != ""){
			if(message.length > 140){
				alertWindowFnFast('error', 'topRight', '<b>Message length is greater then 140<br>Please Enter Subject</b>');
				$('#form_data_subject,#form_data_message').css({'border':'1px solid red'});
				status = 1;
			}
			else{
				$('#form_data_message').css({'border':'1px solid silver'});
				$('#form_data_subject').css({'border':'1px solid red'});
				alertWindowFnFast('error', 'topRight', '<b>Please Enter Subject</b>');
				status = 1;
			}
		}
		else if(subject != "" && message == ""){
			$('#form_data_message').css({'border':'1px solid red'});
			alertWindowFnFast('error', 'topRight', '<b>Please Enter Message</b>');
			status = 1;
		}
		if(status == 0){
			alertWindowFnFast('success', 'topRight', '<b>Message send successfully</b>');
		}
	});
	/*check number of character in message box*/
	$(document).on('input','#form_data_message',function(){
     	var awn_id = $(this).val();
     	if(awn_id != '' && awn_id.length<=140){
        	$('#msg_counter').html(awn_id.length);
    	}
    });

	/*chnage the value on click sub menu heading*/
    $('.subMenu_parent ul li').click(function(){
    	var changeValue = $(this).find('a').html();
    	$('#leftSection>div>h3').html('Justo Vulputate Tortor Sem - '+ changeValue)
    	$('.subMenu_parent ul li').removeClass('active');
    	$(this).addClass('active');
    });
})

/*click on send button message function*/
function alertWindowFnFast(msgtype,position,testMsg){
    var n = noty({
        text        : testMsg,
        type        : msgtype,
        dismissQueue: false,
        layout      : position,
        closeWith   : ['click'],
        theme       : 'bootstrapTheme',
        killer      : true,
        animation: {
            open: {height: 'toggle'},
            close: {height: 'toggle'},
            easing: 'swing',
            speed: 100
        }
    });
    return n;
}