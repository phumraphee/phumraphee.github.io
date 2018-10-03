Vue.component('topmenu',{
    template: `
        <nav id="topmenu" class="navbar navbar-expand-lg navbar-dark fixed-top">
            <a class="navbar-brand" href="index.html"><img src="im/somlogobeta.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    
                </ul>
                <ul class="navbar-nav my-2 my-lg-0">
                    <li class="nav-item"> <a class="nav-link" href="shop">ออกแบบเสื้อ</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="portfolio">ผลงานที่ผ่านมา</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="price">ราคา</a> </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> รายละเอียด </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="size">ขนาดเสื้อ</a>
                            <a class="dropdown-item" href="faq">คำถามที่พบบ่อย</a>
                            <a class="dropdown-item" href="fabric">เนื้อผ้า</a>
                            <a class="dropdown-item" href="why">ทำไมต้องเลือกเรา?</a>
                            <a class="dropdown-item" href="example">ตัวอย่างเสื้อ</a>
                            <!--<div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>-->
                        </div>
                    </li>
                    <li class="nav-item"> <a class="nav-link" href="about">เกี่ยวกับเรา</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="contact">ติดต่อสมศรี</a> </li>
                </ul>
            </div>
        </nav>
    `,
    mounted: function() { setTimeout(()=> {
        console.log($(this.$el));
        $(this.$el).find('li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).fadeIn(100);
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).fadeOut(100);
        });
    },10); }
});

//top menu for old mobile in file shared.js

new Vue({
    el: '#vue-wrap-menu'
});

