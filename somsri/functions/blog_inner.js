const express = require('express');
const app = express();
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);

app.get('/blog/:id', (req, res) => {
    var blogid = req.params.id;
    var db = admin.firestore();

    var blogdata = {};
    var blogbody = [];

    db.collection("blog").doc(blogid).get().then(function(data) {
        if (data.exists) {
            blogdata = data.data();
            blogbody = blogdata.body;
            //console.log(blogdata);
            main();
        } else {
            console.log("Blog doesn't exists");
            blogdata.id = blogid;
            blogdata.topic = "ไม่พบบล็อกที่ต้องการ";
            main();
        }
    }).catch(function(e) {
        console.log("Error",e);
    });

    function main() {
        var upper = 
            `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="keywords" content="สมศรี,สมศรีมีเสื้อ,รับผลิตเสื้อยืด,รับผลิตเสื้อ,สกรีนเสื้อ,ทำเสื้อ,เสื้อพนักงาน,เสื้อค่าย,เสื้อกิจกรรม,เสื้อโปโล,รับทำเสื้อโปโล,รับผลิตเสื้อโปโล,ผลิตเสื้อโปโล,ออกแบบเสื้อโปโล,โรงงานเสื้อโปโล,ผลิตเสื้อยืด,ออกแบบเสื้อยืด,โรงงานเสื้อยืด,โรงงานสกรีนเสื้อ,สกรีนเสื้อ ราคาถูก">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="shortcut icon" href="../im/som-logo.ico">
                    <!--fb-->                    
            `;

        var og = 
            '<title>'+blogdata.topic+' - สมศรีมีเสื้อ</title>' +
            '<meta name="description" content="'+blogdata.description+'"/>' +
            '<meta property="og:description" content="'+blogdata.description+'" />' +
            '<meta property="og:title" content="'+blogdata.topic+' - สมศรีมีเสื้อ"/>' +
            '<meta property="og:image" content="'+blogdata.ogimg+'"/>'+
            '<meta property="og:url" content="http://somsritshirt.com'+req.url+'"/>';

        var lower = 	
            `	
                <!-- external library (jquery, vue, bootstrap and ...) -->
                <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.3/vue.min.js"></script>
                
                <!-- pace.js : loading progress bar -->
                <script src="../js/pace/pace.min.js"></script>
                <link rel="stylesheet" href="../js/pace/pace-theme-flash.css">
                <link rel="stylesheet" href="../css/fade.css">
                
                <!-- css -->
                <link rel="stylesheet" href="../css/normalize.min.css">
                <link rel="stylesheet" href="../css/style_tgm.css">
                <link rel="stylesheet" href="../css/style.css">
                
                <!-- togglem -->
                <!-- me -->
                <meta name="viewport" type="image/x-icon" content="width=device-width,initial-scale=1">
                <link rel="stylesheet" type="text/css" href="../css/reset.css">
                <link rel="stylesheet" type="text/css" href="../css/style_Blogs.css">
                <link rel="stylesheet" type="text/css" href="../css/font-awesome.css">
                <link rel="stylesheet" type="text/css" href="../css/Prompt.css">
                <link rel="stylesheet" type="text/css" href="../css/style_fabric.css">
                <link rel="stylesheet" type="text/css" href="../css/style_faq.css">
                <link rel="stylesheet" type="text/css" href="../css/new/blog_inner.css">
                <link rel="stylesheet" href="../css/menufixed.css">
                <script src="../js/shared.js"></script>
                <link rel="stylesheet" href="../css/shared.css">
            </head>
            <body>
                <nav id="topmenu" class="navbar navbar-expand-lg navbar-dark fixed-top">
                    <a class="navbar-brand" href="/"><img src="../im/somlogobeta.png"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            
                        </ul>
                        <ul class="navbar-nav my-2 my-lg-0">
                            <li class="nav-item"> <a class="nav-link" href="/shop">ออกแบบเสื้อ</a> </li>
                            <li class="nav-item"> <a class="nav-link" href="/portfolio">ผลงานที่ผ่านมา</a> </li>
                            <li class="nav-item"> <a class="nav-link" href="/price">ราคา</a> </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> รายละเอียด </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/size">ขนาดเสื้อ</a>
                                    <a class="dropdown-item" href="/faq">คำถามที่พบบ่อย</a>
                                    <a class="dropdown-item" href="/fabric">เนื้อผ้า</a>
                                    <a class="dropdown-item" href="/why">ทำไมต้องเลือกเรา?</a>
                                    <a class="dropdown-item" href="/example">ตัวอย่างเสื้อ</a>
                                    <!--<div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>-->
                                </div>
                            </li>
                            <li class="nav-item"> <a class="nav-link" href="/about">เกี่ยวกับเรา</a> </li>
                            <li class="nav-item"> <a class="nav-link" href="/contact">ติดต่อสมศรี</a> </li>
                        </ul>
                    </div>
                </nav>

                <div class="wappp">
                    <div class="breadcrumb-wapp clearfix">
                        <a href="/">
                            <span class="bt1 left">หน้าแรก</span>
                        </a>
                            <span class="bt1 left">&nbsp;>&nbsp;</span>
                        <a href="/blog">
                            <span class="bt1 left">บล็อก</span>
                        </a>
                            <span class="bt1 left">&nbsp;>&nbsp;</span>
                        <a class="blogidhref" href="`+blogdata.id+`">
                        ` +
                           '<span class="bt1 abt1 left"><span class="topictext">'+blogdata.topic+'</span></span>' +
                        `
                        </a>
                    </div>
                    <!-- breadcrumb-wapp -->
                    <div class="hr">
                        <hr class="hr1">
                    </div>
                    <!-- hr -->
                    <div class="toppig">
                    ` +
                       '<span class="toptext"><span class="topictext">'+blogdata.topic+'</span></span>' +
                    `
                    </div>
                    <!-- toppig -->
                    <div class="aboutbodypanel" style="margin-bottom:40px">
                        <div class="bodypart">
                        ` + 
                            (function() {
                                var res = "";

                                blogbody.forEach(function(data) {
                                    if (data.type==0) {
                                        //$('<p class="outerp"></p>').html(data.text).appendTo($(".bodypart"));
                                        res += '<p class="outerp">'+data.text+'</p>';
                                    } else if (data.type==1) {
                                        //var wrapper = $("<div></div>").css("text-align","center");
                                        //$("<img></img>").attr("src",data.src).css("width",data.size+"%").appendTo(wrapper);
                                        //wrapper.appendTo($(".bodypart"));

                                        res += '<div style="text-align:center;"><img width="'+data.size+'%" src="'+data.src+'"></div>';
                                    }
                                });

                                return res;
                            })() +
                        `    
                        </div>
                        <button id="fbsharebtn" class="sharebtn btn btn-primary" onclick='window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href,"_blank")'>Share ไปยัง facebook</button>
                        <button id="tweetbtn" class="sharebtn btn btn-primary" onclick='window.open("https://twitter.com/intent/tweet?text=`+blogdata.topic+` "+window.location.href,"_blank")'>Tweet</button>
                        <div class="authorpart">เขียนโดย : ${blogdata.create_by?blogdata.create_by:'นาย ธนพล อรุณศิริ'}</div>
                    </div>

                </div>
                
                <footer>
                    Copyright © 2017 Somsri T-shirt All Right Reserved.
                    Tel. <font color='white' >085-194-6521</font>  | lineID: <a target="_blank" href="https://line.me/R/ti/p/%40diz8986o"><font color='white'>@somsritshirt</font></a>  | FB: <a target="_blank" href="https://www.facebook.com/somsritshirt/?__mref=message_bubble"><font color='white'>สมศรีมีเสื้อ</font></a> 
                </footer>
                
                <div class="scroll_top"><div class="scroll_top_icon"></div></div>
                
                <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
                <script src="https://www.gstatic.com/firebasejs/4.9.1/firebase-firestore.js"></script>
            </body>
            </html>
            `;

        res.header('Content-Type', 'text/html');
        res.send(upper+og+lower);
    }
});

exports.app = app;