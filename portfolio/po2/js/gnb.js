$(function(){
	var wrap = $('#gnbWrap');
      var menu = $('#gnb > li');      
     // var menuHeight = menu.find('> a').height();
      menu.on({
          mouseover:function(){
              var tg = $(this);
              menu.removeClass('on');
            tg.addClass('on');
          //  var th = menuHeight + tg.find('> .sGnbArea').height();
            wrap.stop().animate({height:'200px'});
        },
        mouseout:function(){
                var tg = $(this);
                tg.removeClass('on');
                //var th = menuHeight;
                wrap.stop().animate({height:'200px'});
            }
        });
        
    menu.each(function(i){
            var tg = $(this);
            var subList = tg.find('> .sGnbArea > ul > li');
            subList.on({
                mouseover:function(){
                    var tg = $(this);
                    tg.addClass('on');
                },
                mouseout:function(){
                   var tg = $(this);
                    tg.removeClass('on');
                }
           });
      });
});