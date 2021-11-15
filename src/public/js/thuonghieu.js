$(document).ready(function(){ // cái này là cái click vào cái mũi tên bên trái bên phải nó trượt sang +- 1000px
	var x=0;   // ban đầu nó ở vị trí 0
	$('#right').click(()=>{ // click vào cái nút bên phải thì nó trượt sang bên trái 1000px
		if(x<-1000){
			$("#vitri").animate({left:"0px"},500);//cái animate (ở thư viện jquery) , 500 là 500 giây
			$('#vitri').css("left",0); // 0 này là dịch sang bên trái 0px
			x=0;

		}
		else{
			x=x-1000;
			$("#vitri").animate({left:x},500);
			$('#vitri').css("left",x);// cái này thì x=-1000 hay sao ý click phát nữa thì x=-2000 x=x-1000 
		}
			
	})
	$('#left').click(()=>{//đây cũng như cái trên
		if(x>=0){
			$("#vitri").animate({left:"-2000px"}, 500);
			$('#vitri').css("left",-2000);
			x=-2000;
		}
		else{
			x=x+1000;
			$("#vitri").animate({left:x}, 500);
			$('#vitri').css("left",x);
		}
	})
})