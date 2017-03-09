$(function() {
	$('.wz,.moreWz,.ahref1,.ahref2,.ahref3,.ahref4').draggable({
		revert: true,
		proxy: 'clone'
	});
	$('.dragCont').droppable({
		onDragEnter: function() {
			$(this).addClass('over');
		},
		onDragLeave: function() {
			$(this).removeClass('over');
		},
		onDrop: function(e, source) {
			debugger;
			$(this).removeClass('over');
			if ($(source).hasClass('assigned')) {
				//debugger;
				$(this).append(source);
			} else {
				var c;
				if(source.defaultValue == "文字"){
					c = $("<input type='text'/>").addClass('assigned');
				}else if(source.defaultValue == "多行文字"){
					c = $("<textarea></textarea>").addClass('assigned');
				}else if(source.className == "ahref1"){
					c = $("<input type='radio'/>").addClass('assigned ahref');
				}else if(source.className == "ahref2"){
					c = $("<input type='checkbox'/>").addClass('assigned ahref');
				}
				//var c = $(source).clone().addClass('assigned');
				$(this).append(c);
				c.focus();
				c.draggable({
					revert: true
				});
			}
		}
	});
});