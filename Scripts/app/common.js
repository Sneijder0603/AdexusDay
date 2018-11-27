/*--------------------------------------------------------------------------------------------------------- 
RESPONSIVE PANEL TABLET
**//*---------------------------------------------------------------------------------------------------- */

var generales = function(){
    
};



/*--------------------------------------------------------------------------------------------------------- 
CLICK REMOVE ASIDE PANEL
**//*---------------------------------------------------------------------------------------------------- */

var MenuPanel = function(){

    $('body').on('click', '.btn-show', function () {
        var $el = $(this);
        if (!$el.hasClass('active')) {
            $('.wrap-content').animate({
                left: '300'
            });
            $el.addClass('active');
        } else {
            $('.wrap-content').animate({
                left: '60'
            });
            $el.removeClass('active');
        }
    });        

}

MenuPanel();

/*--------------------------------------------------------------------------------------------------------- 
NAV
**//*---------------------------------------------------------------------------------------------------- */

var nav = function(){

    var $wrap = $('.nav-wrap'),        
    $btn = $wrap.find('li.nav-01 > span'),
    $content = $wrap.find('ul.nav-collapse');

    $('li.nav-01 > span').on('click', function () {
        var $el = $(this),
            $elContent = $el.next('ul.nav-collapse');

        if(!$el.hasClass('active')){
            $content.slideUp();
            $btn.removeClass('active');
            $el.addClass('active');                             
            $elContent.slideDown();                
        }else{
            $el.removeClass('active'); 
            $elContent.slideUp();
        }
    });
}   

nav();



/*--------------------------------------------------------------------------------------------------------- 
RESIZE WINDOW SCROLL
**//*---------------------------------------------------------------------------------------------------- */

$(function (bodyResize) {
    $(window).resize(function () {
        $('.main-content').css("height", $(window).innerHeight() - 114);
    });
    $(window).trigger('resize');
});


