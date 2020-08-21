function manageHeight(){
	var winHeight = $(window).height();
	var headerHeight = $(".header").height();
	var totalHeight = winHeight-headerHeight;
	$(".content").css("height",totalHeight);
}
function validateForm() {
	var x = document.forms["searchApplication"]["appNumber"].value;
	var y = document.forms["searchApplication"]["refNumber"].value;
	var z = document.forms["searchApplication"]["dob"].value;
	if (x == "" && y=="" && z=="") {
	  alert("Please Enter Application Number OR Reference Number OR Date of Birth");
	  return false;
	}
	// if(z.length > 1 && z.length < 6 ){
	// 	alert("Please Enter Valid Mobile Number");
	// 	return false;
	// }
  }
$(document).ready(function(){
	manageHeight();


	$('.otpEntry .input-control').each(function(){
		$(this).keyup(function(){
			if($(this).val()!="") {
				$(this).next().focus();
			}
		})
	});

	$('#appNumber').keypress(function (e) {
		var regex = new RegExp("^[a-zA-Z0-9]+$");
		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		if (regex.test(str)) {
			return true;
		}
		e.preventDefault();
		return false;
	});
	$('#mob').keyup(function (e) {
		if($(this).val().length === 10){
			$('.otpbox').show();
			$('.otpbtn').click(function(){
				$('.otp-input').show();
				$(this).hide();
				$('.submitbtn').show();
			})
		}
		else{
			$('.otpbox').hide();
		}
	})
	$('.form-control input').keyup(function(){
		if($('#appNumber').val() !=""){
			$(this).removeClass('disabled');
			$('#refNumber,#dob').addClass('disabled')
		}
		else if($('#refNumber').val() !=""){
			$(this).removeClass('disabled');
			$('#appNumber, #dob').addClass('disabled')
		}
		else if($('#dob').val() !=""){
			$(this).removeClass('disabled');
			$('#appNumber, #refNumber').addClass('disabled')
		}
		else{
			$('.form-control input').removeClass('disabled');
		}
	})

});
$(window).resize(function(){
	manageHeight();
});