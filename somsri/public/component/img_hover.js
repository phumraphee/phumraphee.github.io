Vue.component('img-hover',{
    template: `
        <div style="
            display:inline-block; 
            background-size:contain; 
            background-repeat:no-repeat;
            transition: background-image 0.5s;
        " v-on:mouseover="update(srchover)" v-on:mouseout="update(src)">
            <img style="visibility:hidden;">
        </div>
    `,
    props: ['src','srchover','lazy'],
    mounted: function() { setTimeout(()=> {
        if (!this.lazy) {
            //console.log(this.$el);
            //$(this.$el).css("background-color","black");
            this.update(this.src);
        } else {
            $(window).on("load",()=> {
                //console.log('dasd');
                //console.log(this.$el);
                this.update(this.src);
            });
        }
        $(window).on("load",()=> {
            //preload hover image
            $("<img />").attr("src", this.srchover);
        });
        /*setInterval(()=> {
            $(this.$el).width($(this.$el).find("img").width());
            $(this.$el).height($(this.$el).find("img").height());
        },100);*/
    },10); },
    methods: {
        update: function(src) {
            //console.log("ddd "+src);
            if (!src) return;
            $(this.$el).css("background-image","url("+src+")");
            $(this.$el).find("img").attr("src",src);
        }
    }
});