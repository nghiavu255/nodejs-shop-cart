$(document).ready(function(){
		
		domat();
		$('#id-next-right').click(right);
		$('#id-next-left').click(left);
	
		slide();
		btnClick();
		
		$('#id-layer').hover(()=>{
			$("#id-layer-img1").animate({opacity:1}, 10);
		})
		
		

		$(window).scroll(function(){ 
        if ($(window).scrollTop() > 0 && $(window).scrollTop() < 1200  ) { 
            $('#id-sp1').css("left","250px");
            $('#id-sp2').css("right","250px");
        } else { 
            
        } 
    	}); 
    	$(window).scroll(kinh); 
			
});
var k=0;
function kinh(){ 
        if ($(window).scrollTop() > 0 && $(window).scrollTop() < 2000  ) 
        { 
        	if(k==-1500){
        		k=0;
        	}
        	else{
        		$('#id-k-img').animate({left:k},2500);
           		$('#id-k-img').css("left",k);
           		k=k-300;
        	}   
       	} 
       	setTimeout("kinh()",5000);
    }
function right(){
		if(x == 1){
			$('#id-layer-img1').attr("src","img/k1.png");
			x=2;
		}
		else if(x==2){
			$('#id-layer-img1').attr("src","img/k2.png");
			x=3;
		}
		else if(x==3){
			$('#id-layer-img1').attr("src","img/k3.png");
			x=4;
		}
		else{
			$('#id-layer-img1').attr("src","img/k4.png");
			x=1;
		}
		
}
function left(){
		if(x == 4){
			$('#id-layer-img1').attr("src","img/k4.png");
			x=3;
		}
		else if(x==3){
			$('#id-layer-img1').attr("src","img/k3.png");
			x=2;
		}
		else if(x==2){
			$('#id-layer-img1').attr("src","img/k2.png");
			x=1;
		}
		else{
			$('#id-layer-img1').attr("src","img/k1.png");
			x=4;
}
}
var time = 5000;var x=1;
function slide(){
		
		if(x==1){
			$("#id-layer-img1").animate({opacity:1}, 2500);
			$('#id-layer-img1').attr("src","img/k1.png");
			$("#id-layer-img1").animate({opacity:0.7}, 2500);
			x=2;
		}
		else if(x==2){
			$("#id-layer-img1").animate({opacity:1}, 2500);
			$('#id-layer-img1').attr("src","img/k2.png");
			$("#id-layer-img1").animate({opacity:0.7}, 2500);
			x=3;
		}
		else if(x==3){
			$("#id-layer-img1").animate({opacity:1}, 2500);
			$('#id-layer-img1').attr("src","img/k3.png");
			$("#id-layer-img1").animate({opacity:0.7}, 2500);
			x=4;
		}
		else {
			$("#id-layer-img1").animate({opacity:1}, 2500);
			$('#id-layer-img1').attr("src","img/k4.png");
			$("#id-layer-img1").animate({opacity:0.7}, 2500);
			x=1;
		}
		setTimeout("slide()",time);
	}

function btnClick(){
		$('#id-a1').click(function(){
			$('#id-layer-img1').attr("src","img/k1.png");
			x=2;
		})
		
		$('#id-a2').click(function(){
			$('#id-layer-img1').attr("src","img/k2.png");
			x=3;
		})
		$('#id-a3').click(function(){
			$('#id-layer-img1').attr("src","img/k3.png");
			x=4;
		})
		$('#id-a4').click(function(){
			$('#id-layer-img1').attr("src","img/k4.png");
			x=1;
		})
}
function domat(){
	$('#id-domat').toggle();
	setTimeout("domat()",8000);
	
}









	
		