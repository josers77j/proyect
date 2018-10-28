$(document).ready(function(){

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 100){
			if(!flag){
				$("header").css({"height": "60px"});
				$(".img-logo").css({"margin-top": "-6px"});
				$(".menu").css({"margin-top": "15px"});
				$("header").css({"background-color": "rgba(0, 0, 0, .3)"});
				flag = true;
			}
		}else{
			if(flag){
				$("header").css({"height":"70px"});
				$(".img-logo").css({"margin-top": "0px"});
				$(".menu").css({"margin-top": "20px"});
				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});
