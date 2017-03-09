/*向上滑出，向下收回*/
$(document).ready(function () {
	$('#up').each(function () {
		var downNull = $('#downNull');
		var up = $('#up').index(this);
		$(this).click(
			function () {
				downNull.eq(up).slideToggle();
			}
		);
		$(document).ready(function(){
			  $("#downNull").click(function(){
			  $("#downNull").slideToggle();
			  });
			});
	});
});
/*操作左侧部分*/
$(document).ready(function () {
	$(".operateLeft li a").click(function () {
		this.children[0].style.display = "none";
		this.children[1].style.display = "block";
	});
	$(".operateLeft li a").click(function () {
		$(".blockImg").css("display","block");
		$(".noneImg").css("display","none");
		this.children[0].style.display = "none";
		this.children[1].style.display = "block";
	});
});

/*点击左侧导航变色*/
function ulClick(o){
	var as=o.parentNode.getElementsByTagName('ul');
	for(var i=0;i<as.length;i++){
	  as[i].style.backgroundColor='';
	}
	o.style.backgroundColor='#e4ecf5';
}
/*选项卡*/
$(document).ready(function() {
	$(".contNav ul").click(function() {
		$(".contNav ul").eq($(this).index()).siblings();
		$(".contDrag1,.contDrag2,.contDrag3").hide().eq($(this).index()).show();
	});
});
/*文本框拖拉*/
/*$(function () {
	$(".operateText,.dragCont").on("dragover",{},function () {
		event.preventDefault();
	});
	$(".operateText li div").on("dragstart","",{},function () {
		var inputId = event.currentTarget.id;
		event.dataTransfer.setData("inputId",inputId);
	});
	$(".operateText,.dragCont").on("drop","",{},function () {
		var div = event.currentTarget;
		var inputId = event.dataTransfer.getData("inputId",inputId);
		var inputDom = document.getElementById(inputId);
		div.appendChild(inputDom);
	});
})*/




