/*header*/
(function(){
	var $li = $('.h-t-m-left>ul>li');
	var $liveLi = $('.h-t-m-left .l4 .hide .hide-live .hide-live-list>li');
	var $rListLi = $('.r-list>li');
	var $show = $('.showImg');
	var $showImg = $('.showImg img');
	var $contribute = $('.h-contribute');
	var $search =$('.h-l-search .h-l-s-main .search');

	//左侧所有的ul li
	$li.hover(function(){
		$(this).find('.hide').show();
	},function(){
		$(this).find('.hide').hide();
	});
	//周边
	$liveLi.hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
	//最新预告图片
	$rListLi.hover(function(){
		$show.show();
		var src = $(this).attr('dataImg');
		$showImg.prop('src' , src);
	},function(){
		$show.hide();
	});
	//登陆、注册
	$contribute.hover(function(){
		$(this).css('background' , 'url(' + $(this).attr('dataHover') + ')');
		$(this).find('.h-c-hide').show();
	},function(){
		$(this).css('background' , 'url(' + $(this).attr('dataNormal') + ')');
		$(this).find('.h-c-hide').hide();
	});
	//搜索框上面获得焦点的时候
	$search.focus(function(){
		$(this).parent().addClass('hover');
	});
	$search.blur(function(){
		$(this).parent().removeClass('hover');
	});
})();
/*nav*/
(function(){
	var $hideLi = $('#h-nav .navHide .hideList .hideLi');
	var $navLi = $('#h-nav .navLi');
	var $navPhone = $('#h-nav li.phone');

	$hideLi.hover(function(){
		$(this).find('.nav-a2').stop().animate({
			paddingLeft : '20px',
			paddingRight : '10px'
		},200);
		$(this).find('.rightArrow span').stop().animate({
			left : '0px',
			opacity : 1
		},200);
	},function(){
		$(this).find('.nav-a2').stop().animate({
			paddingLeft : '15px',
			paddingRight : '15px'
		},200);
		$(this).find('.rightArrow span').stop().animate({
			left : '30px',
			opacity : 0
		},200);
	});

	$navLi.hover(function(){
		$(this).find('.navHide').show();
	},function(){
		$(this).find('.navHide').hide();
	});

	$navPhone.hover(function(){
		$(this).find('.p-hide').show();
	},function(){
		$(this).find('.p-hide').hide();
	});
})();