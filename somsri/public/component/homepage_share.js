//require <script src='js/underscore.min.js'></script>

Vue.component('homepage-share',{
    template: `
        <div style="position:relative; overflow:hidden;">
            <div class="homepage-share">
        		<ul>
        		    <template v-for="xxx in 2">
               			<li v-for="(img,index) in _.zip(data,datahover)">
               			    <template v-if="index>=5">
               			        <img-hover :src="img[0]" :srchover="img[1]" :lazy="true">
               			    </template>
               			    <template v-else>
               			        <img-hover :src="img[0]" :srchover="img[1]" :lazy="true">
               			    </template>
               			</li>
           			</template>
         		</ul>
            </div>
        </div>
    `,
    props: ['data','datahover','offset'],
    mounted: function() { setTimeout(()=> {
        if (!this.offset) this.offset = 0;
        this.offset = parseInt(this.offset);
        this.rawOffset = this.offset;
        //console.log("dsdadas");
        this.$emit("slide");
        this.pos = 0;
        
        $(this.$el).find("ul").css("left",this.offset);
        $(window).on("load",()=> {
            setInterval(()=>{
                this.slide($(this.$el).find("ul"));
                //console.log(this);
            },3000);
        });
        
        $(window).on("resize",()=> {
            if ($(window).width<=768) {
                this.offset = this.rawOffset/2;
            } else {
                this.offset = this.rawOffset;
            }
            this.rearrange($(this.$el).find("ul"));
        });
    },10); },
    methods: {
        slide: function(el) {
            //console.log("slide run!!");
            el.animate({
                left: "-="+(el.find("li").width()+30)
            },500,()=>{
                var left = el.css("left");
                var jump = (el.find("li").width()+30);
                //console.log(parseInt(left)-this.offset);
                this.pos++;
                //console.log(this.pos);
                //if (-((parseInt(left)-this.offset)/jump)==this.data.length) {
                if (this.pos>=this.data.length) {
                    el.css("left",this.offset);
                    //console.log(this.offset);
                    this.pos = 0;
                }
            });
        },
        rearrange: function(el) {
            //console.log("aaa");
            el.css("left",-((el.find("li").width()+30)*this.pos)+this.offset);
        }
    }
});