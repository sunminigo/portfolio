var $num2 = 0;
var $colWidth2 = 217;
var $frameNum2 = 4;
var $rolling2 = true;
var $banner2Auto2;
var $posX2;
var $banner2;
var $objLength2;
var $objMax2;
var $conImg2;
$(document).ready(function(){
$banner2 = $(".bannerlist");
$objLength2 = $banner2.children().length;
$objMax2 = $objLength2-$frameNum2;
});
$banner2Auto2 = setInterval(function(){
	$num2--;	
	if($num2<-$objMax2){
	$num2=0;
	$banner2.css("left","0");
	}						
	$posX2 = $num2*$colWidth2;		
	$banner2.animate({left:$posX2},200);	
	},4000);
function right(){
	$num2--;
	if($num2<-$objMax2){
	$num2=0;
	$banner2.css("left","0");
	}						
	$posX2 = $num2*$colWidth2;		
	$banner2.animate({left:$posX2},200);	
	}
function left(){
	$num2++;
	if($num2>0){
	$num2=-$objMax2;
	$banner2.css("left",($objMax2*-$colWidth2)+"px");
	}								
	$posX2 = $num2*$colWidth2;		
	$banner2.animate({left:$posX2},200);	
	}

function play(){
	if(!$rolling2){
	$rolling2 = true;
	$banner2Auto2 = setInterval(function(){
	$num2--;
	if($num2<-$objMax2){
	$num2=0;
	$banner2.css("left","0");
	}					
	$posX2 = $num2*$colWidth2;		
	$banner2.animate({left:$posX2},200);			
	},2000);	
	}
}
function stop(){
	if($rolling2){
	$rolling2 = false;
	clearInterval($banner2Auto2);
	}
}