var $mScroll = jQuery.noConflict();
function mobScroll(nav){
    this.offset=0;
    this.speed=750;
    this.nav=nav;
    this.init=function(){
        var speed = this.speed,
        nav =  $mScroll(this.nav),
        bod = $mScroll('body,html'),
        offset = this.offset;
        
        this.offset = nav.height();
        //Bind to Btns
        nav.children().each(function(scroll){
            var btn = $mScroll(this),
            div = '#'+btn.data('go2'),
            dest = $mScroll(div).offset().top-offset;
            btn.click(function(e){
                e.preventDefault();
                bod.animate(
                    {scrollTop:dest},
                    speed,
                    'swing'
                );
            });
        });
    },
    this.go2=function(div){
        var dest = $mScroll(div).offset().top-this.offset;
        this.bod.animate(
            {scrollTop:dest},
            this.speed,
            'swing'
        );
    };
}
