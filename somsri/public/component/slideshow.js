jQuery.fn.extend({
    slideshow: function(img,width) {
        var container = this.append('<div class="slideshow-container"> </div>').find(".slideshow-container");
        if (width) container.css("max-width",width);
        container.data("slide",1);
        //console.log(container);
        
        $.each(img,function(i,src) {
            container.append('<div class="mySlides" data-id="'+(i+1)+'"> <div class="numbertext">'+(i+1)+' / '+img.length+'</div> <img src="'+src+'" style="width:100%"> </div>');
        });
        
        container.append('<a class="prev">&#10094;</a>');
        container.append('<a class="next">&#10095;</a>');
        
        /*var dotcontainer = container.append('<div class="dotcontainer" style="text-align:center"> </div>').find('.dotcontainer');
        
        for(var i = 1;i<=img.length;i++) {
            dotcontainer.append('<span class="dot"></span>');
        }
        
        dotcontainer.find("span").each(function(i) {
            $(this).click(function() {
                container.data("slide",i+1);
            });
        });*/
            
        container.find(".prev").click(function() {
            var newslide = container.data("slide")-1;
            if (newslide<1) newslide = img.length;
            container.data("slide",newslide);
        });
        
        container.find(".next").click(function() {
            var newslide = container.data("slide")+1;
            if (newslide>img.length) newslide = 1;
            container.data("slide",newslide);
        });
        
        var thiss = this;
        
        setInterval(function() {
            container.find(".mySlides").each(function () {
                if ($(this).data("id") == container.data("slide")) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }, 100);
    }
});