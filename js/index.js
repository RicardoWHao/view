/*从json获取书籍*/
$(function () {
	$.get("json/book.json",{},function (data) {
		for (var i = 0;i<data.length-4;i++) {
			var li = $("<li></li>");
			var img = $("<img id='"+i+"' src='"+data[i].book_image+"'/>");
			img.addClass("imgBook");
			$(".textbook1").append(li);
			li.append(img);
			/*鼠标经过翻转界面*/
			var englishNote_div = $("<div></div>");
			englishNote_div.addClass("englishNote");
			li.append(englishNote_div);
			var noteCover_ul = $("<ul></ul>");
			noteCover_ul.addClass("noteCover");
			englishNote_div.append(noteCover_ul);
			var li1 = $("<li class='noteCover_title'>"+"英语 笔记"+(i+1)+"</li>"); 
			var li2 = $("<li class='noteCover_edit'></li>"); 
			var a = $("<a href='drag.html'>编辑笔记</a>");
			var li3 = $("<li class='noteCover_operate'></li>"); 
			
			noteCover_ul.append(li1);
			noteCover_ul.append(li2);
			li2.append(a);
			noteCover_ul.append(li3);
			var operate_tips_ul = $("<ul></ul>");
			var li1_operate_tips = $("<li></li>");
			var li2_operate_tips = $("<li></li>");
			var li3_operate_tips = $("<li></li>");
			var tip_img1 = $("<img/>");
			var tip_img2 = $("<img/>");
			var tip_img3 = $("<img/>");
			operate_tips_ul.addClass("operate_tips");
			li2_operate_tips.addClass("del");
			tip_img1.attr("src","./img/indexEdit1.png");
			tip_img2.attr("src","./img/indexdel1.png");
			tip_img3.attr("src","./img/indexCopy1.png");
			li3.append(operate_tips_ul);
			operate_tips_ul.append(li1_operate_tips);
			operate_tips_ul.append(li2_operate_tips);
			operate_tips_ul.append(li3_operate_tips);
			li1_operate_tips.append(tip_img1);
			li2_operate_tips.append(tip_img2);
			li3_operate_tips.append(tip_img3);
			
			
			
			/*鼠标经过图书翻转*/
			for (var j = 0; j < li.length; j++) {
				li[j].onmouseover = function () {
					this.children[0].style.display = "none";
					this.children[1].style.display = "block";
					/*修改弹出框图书*/
					var pic = this.children[0].outerHTML;
					pic = pic.replace(/\"/g,"'");
					pic = pic.replace(/display: none/g,"display:block");
					$("#pic")[0].innerHTML = pic;
					
				}
				li[j].onmouseout = function () {
					this.children[0].style.display = "block";
					this.children[1].style.display = "none";
				}
			}
			
			/*修改蒙版*/
			tip_img1.each(function() {
				var mengbanDiv = $('#mengban');
				var editDiv = $("#editDiv");
				var edit = $('#edit').index(this);
				//debugger;
				$(this).mouseover(function() {
						tip_img1.attr("src","./img/indexEdit2.png");
						//debugger;
					}
				);
				$(this).click(function() {
						mengbanDiv.eq(edit).slideToggle();
						editDiv.eq(edit).slideToggle();
					}
				);
				$('#offEdit').on("click", function() {
					mengbanDiv.hide();
					editDiv.hide();
				});
			});
			/*删除蒙版*/
			tip_img2.each(function() {
				var mengbanDiv = $('#mengban');
				var delDiv = $("#delDiv");
				var del = $('#del').index(this);
				$(this).click(
					function() {
						mengbanDiv.eq(del).slideToggle();
						delDiv.eq(del).slideToggle();
					},
					function() {
						mengbanDiv.eq(del).slideToggle();
						delDiv.eq(del).slideToggle();
					}
				);
				$('#offDel').on("click", function() {
					mengbanDiv.hide();
					delDiv.hide();
				});
			});
		}
		//debugger;
		for (var i = 4;i<data.length;i++) {
			var li = $("<li></li>");
			var img = $("<img id='"+i+"' src='"+data[i].book_image+"'/>");
			img.addClass("imgBook");
			$(".textbook2").append(li);
			li.append(img);
			
			/*鼠标经过翻转界面*/
			var englishNote_div = $("<div></div>");
			englishNote_div.addClass("englishNote");
			li.append(englishNote_div);
			var noteCover_ul = $("<ul></ul>");
			noteCover_ul.addClass("noteCover");
			englishNote_div.append(noteCover_ul);
			var li1 = $("<li class='noteCover_title'>"+"英语 笔记"+(i+1)+"</li>"); 
			var li2 = $("<li class='noteCover_edit'></li>"); 
			var a = $("<a href='drag.html'>编辑笔记</a>")
			var li3 = $("<li class='noteCover_operate'></li>"); 
			noteCover_ul.append(li1);
			noteCover_ul.append(li2);
			li2.append(a);
			noteCover_ul.append(li3);
			
			var operate_tips_ul = $("<ul></ul>");
			var li1_operate_tips = $("<li></li>");
			var li2_operate_tips = $("<li></li>");
			var li3_operate_tips = $("<li></li>");
			var tip_img1 = $("<img/>");
			var tip_img2 = $("<img/>");
			var tip_img3 = $("<img/>");
			operate_tips_ul.addClass("operate_tips");
			li2_operate_tips.addClass("del");
			tip_img1.attr("src","./img/indexEdit1.png");
			tip_img2.attr("src","./img/indexdel1.png");
			tip_img3.attr("src","./img/indexCopy1.png");
			li3.append(operate_tips_ul);
			operate_tips_ul.append(li1_operate_tips);
			operate_tips_ul.append(li2_operate_tips);
			operate_tips_ul.append(li3_operate_tips);
			li1_operate_tips.append(tip_img1);
			li2_operate_tips.append(tip_img2);
			li3_operate_tips.append(tip_img3);
			
			for (var j = 0; j < li.length; j++) {
				li[j].onmouseover = function () {
					this.children[0].style.display = "none";
					this.children[1].style.display = "block";
					var pic = this.children[0].outerHTML;
					pic = pic.replace(/\"/g,"'");
					pic = pic.replace(/display: none/g,"display:block");
					$("#pic")[0].innerHTML = pic;
					
					
				}
				li[j].onmouseout = function () {
					this.children[0].style.display = "block";
					this.children[1].style.display = "none";
				}
			}
			
			/*修改蒙版*/
			
			tip_img1.each(function() {
				var mengbanDiv = $('#mengban');
				var editDiv = $("#editDiv");
				var edit = $('#edit').index(this);
				//debugger;
				$(this).click(function() {
						mengbanDiv.eq(edit).slideToggle();
						editDiv.eq(edit).slideToggle();
					}
				);
				$('#offEdit').on("click", function() {
					mengbanDiv.hide();
					editDiv.hide();
				});
			});
			/*删除蒙版*/
			tip_img2.each(function() {
				var mengbanDiv = $('#mengban');
				var delDiv = $("#delDiv");
				var del = $('#del').index(this);
				$(this).click(
					function() {
						mengbanDiv.eq(del).slideToggle();
						delDiv.eq(del).slideToggle();
					},
					function() {
						mengbanDiv.eq(del).slideToggle();
						delDiv.eq(del).slideToggle();
					}
				);
				$('#offDel').on("click", function() {
					mengbanDiv.hide();
					delDiv.hide();
				});
			});
		}
		
	});
});
/*下拉列表事件*/
$(document).ready(function() {
	$('#sel').each(function() {
		var ul_cont = $('#select_cont');
		var ul_sel = $('#sel').index(this);
		$(this).click(function() {
				ul_cont.eq(ul_sel).slideToggle();
			});
	});
});
/*鼠标经过下拉框事件*/
$(document).ready(function() {
	$(".cont_inClass").hover(function() {
		$(".cont_inClass").css("background-color", "#eef6ff");
		$(".cont_inClass a").css("color","#3F97FF");
		$(".cont_review").css("background-color", "#fff");
		$(".cont_review a").css("color","#383838");
	}, function() {
		$(".cont_inClass").css("background-color", "#fff");
		$(".cont_inClass a").css("color","#383838");
		$(".cont_review").css("background-color", "#eef6ff");
		$(".cont_review a").css("color","#3F97FF");
	});
});













