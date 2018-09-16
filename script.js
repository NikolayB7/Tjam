
$("#head_btn").on('click',function(){
	$('#modal1').show('drop', 1000);
})

$('#close_modal').click(function(){
	$('#modal1').hide('drop',1000);
})




$('#btn2').click(function(){
	$('#modal2').show('drop', 1000);
	
})

$('#close_modal2').click(function(){
	$('#modal2').hide('drop',1000);
})



$('#btn_Team').click(function(){
	$('#modal3').show('drop', 1000);
})

$('#close_modal3').click(function(){
	$('#modal3').hide('drop',1000);
})



/************Отмена обновления form**************/
$('form').submit(function () {
	return false;
});
/********************************/
/*********Плавный переход по якорям**********/

$("body").on('click', '[href*="#"]', function(e){
var fixed_offset = 0;
$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
e.preventDefault();
});
/********************************************/


