//const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for t`he specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const functions = require('firebase-functions');
const mkdirp = require('mkdirp-promise');
const gcs = require('@google-cloud/storage')();
const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');

// File extension for the created JPEG files.
const JPEG_EXTENSION = '.jpg';

/**
 * When an image is uploaded in the Storage bucket it is converted to JPEG automatically using
 * ImageMagick.
 */
/*exports.imageToJPG = functions.storage.object().onChange((event) => {
    const object = event.data;
    const filePath = object.name;
    const baseFileName = path.basename(filePath, path.extname(filePath));
    const fileDir = path.dirname(filePath);
    const JPEGFilePath = path.normalize(path.format({
        dir: fileDir,
        name: baseFileName.replace("_resize",""),
        ext: JPEG_EXTENSION
    }));
    const JPEGFilePath2 = path.normalize(path.format({
        dir: fileDir,
        name: baseFileName.replace("_resize","")+"2",
        ext: JPEG_EXTENSION
    }));
    const tempLocalFile = path.join(os.tmpdir(), filePath);
    const tempLocalDir = path.dirname(tempLocalFile);
    const tempLocalJPEGFile = path.join(os.tmpdir(), JPEGFilePath);
	const tempLocalJPEGFile2 = path.join(os.tmpdir(), JPEGFilePath2);
	
	console.log("File Dir : "+fileDir);

    // Exit if this is triggered on a file that is not an image.
    if (!object.contentType.startsWith('image/')) {
        console.log('This is not an image.');
        return null;
    }

    // Exit if the image is already a JPEG.
    //if (object.contentType.startsWith('image/jpeg')) {
    //    console.log('Already a JPEG.');
    //    return null;
    //}
	
	// Exit if not marked (jpg only)
	if (object.contentType.startsWith('image/jpeg')) {
		if (!baseFileName.endsWith("_resize")) {
			console.log("Don't need to resize (Base case)");
			return null;
		}
	}

    // Exit if this is a move or deletion event.
    if (object.resourceState === 'not_exists') {
        console.log('This is a deletion event.');
        return null;
    }

    const bucket = gcs.bucket(object.bucket);
    // Create the temp directory where the storage file will be downloaded.
    return mkdirp(tempLocalDir).then(() => {
        // Download file from bucket.
		if (object.contentType.startsWith('image/jpeg')) {
			return bucket.file(filePath).download({
				destination: tempLocalJPEGFile2
			});
		} else {
			return bucket.file(filePath).download({
				destination: tempLocalFile
			});
		}
    }).then(() => {
        // Convert the image to JPEG using ImageMagick.
        if (object.contentType.startsWith('image/jpeg')) {
			console.log('The file has been downloaded to', tempLocalJPEGFile2);
			return spawn('convert', [tempLocalJPEGFile2, '-sampling-factor', '4:2:0', '-strip', '-quality', '70', '-interlace', 'JPEG', '-colorspace', 'sRGB', tempLocalJPEGFile]);
		} else {
			console.log('The file has been downloaded to', tempLocalFile);
			return spawn('convert', [tempLocalFile,tempLocalJPEGFile2]).then(()=>{return spawn('convert', [tempLocalJPEGFile2, '-sampling-factor', '4:2:0', '-strip', '-quality', '70', '-interlace', 'JPEG', '-colorspace', 'sRGB', tempLocalJPEGFile])});
		}
    }).then(() => {
        console.log('JPEG image created at', tempLocalJPEGFile);
        // Uploading the JPEG image.
        return bucket.upload(tempLocalJPEGFile, {
            destination: JPEGFilePath
        });
    }).then(() => {
		// Delete old images to free up cloud space
		return bucket.file(filePath).delete();
	}).then(() => {
        console.log('JPEG image uploaded to Storage at', JPEGFilePath);
        // Once the image has been converted delete the local files to free up disk space.
        fs.unlinkSync(tempLocalJPEGFile);
		if (!object.contentType.startsWith('image/jpeg')) {
			fs.unlinkSync(tempLocalFile);
		}
        return;
    });
});*/

exports.blog_inner = functions.https.onRequest(require("./blog_inner.js").app);

/*const express = require('express');
const app = express();

app.get('/xxx', (req, res) => {
    var upper = 
        `
        <!DOCTYPE html>
        <html>
            <head>
                <title>สมศรีมีเสื้อ - บล็อก</title>
                <meta charset="utf-8">
                <meta name="keywords" content="สมศรี,สมศรีมีเสื้อ,รับผลิตเสื้อยืด,รับผลิตเสื้อ,สกรีนเสื้อ,ทำเสื้อ,เสื้อพนักงาน,เสื้อค่าย,เสื้อกิจกรรม,เสื้อโปโล,รับทำเสื้อโปโล,รับผลิตเสื้อโปโล,ผลิตเสื้อโปโล,ออกแบบเสื้อโปโล,โรงงานเสื้อโปโล,ผลิตเสื้อยืด,ออกแบบเสื้อยืด,โรงงานเสื้อยืด,โรงงานสกรีนเสื้อ,สกรีนเสื้อ ราคาถูก">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="shortcut icon" href="../im/som-logo.ico">
                <!--fb-->
                <meta property="og:description" content="รับผลิตเสื้อยืด เสื้อโปโล สกรีนเสื้อ ปักเสื้อ ราคาย่อมเยา ไม่แพง พร้อมรับประกันคุณภาพและความพึงพอใจ" />
                <meta property="og:title" content="สมศรีมีเสื้อ - รับผลิตเสื้อยืด เสื้อโปโล  สกรีนเสื้อ ปักเสื้อ"/>
        `;

    var ogimg = '<meta property="og:image" content="http://somsritshirt.com/im/som_sb2.jpg"/>';

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
                    <a class="blogidhref" href="#">
                        <span class="bt1 abt1 left"><span class="topictext">กำลังโหลด กรุณารอ</span></span>
                    </a>
                </div>
                <!-- breadcrumb-wapp -->
                <div class="hr">
                    <hr class="hr1">
                </div>
                <!-- hr -->
                <div class="toppig">
                    <span class="toptext"><span class="topictext">กำลังโหลด กรุณารอ</span></span>
                </div>
                <!-- toppig -->
                <div class="aboutbodypanel" style="margin-bottom:40px">
                    <div class="bodypart">
                        
                    </div>
                    <button id="fbsharebtn" class="sharebtn btn btn-primary">Share ไปยัง facebook</button>
                    <button id="tweetbtn" class="sharebtn btn btn-primary">Tweet</button>
                    <div class="authorpart">เขียนโดย : นาย ธนพล อรุณศิริ</div>
                </div>

            </div>
            
            <footer>
                Copyright © 2017 Somsri T-shirt All Right Reserved.
                Tel. <font color='white' >085-194-6521</font>  | lineID: <a target="_blank" href="https://line.me/R/ti/p/%40diz8986o"><font color='white'>@somsritshirt</font></a>  | FB: <a target="_blank" href="https://www.facebook.com/somsritshirt/?__mref=message_bubble"><font color='white'>สมศรีมีเสื้อ</font></a> 
            </footer>
            
            <div class="scroll_top"><div class="scroll_top_icon"></div></div>
            
            <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
            <script src="https://www.gstatic.com/firebasejs/4.9.1/firebase-firestore.js"></script>
            <script>
                // Initialize Firebase
                var config = {
                    apiKey: "AIzaSyCKxEYUtxMrevfSLSRHKUHc7gKTSKBZ-Vg",
                    authDomain: "somsritshirt-ced49.firebaseapp.com",
                    databaseURL: "https://somsritshirt-ced49.firebaseio.com",
                    projectId: "somsritshirt-ced49",
                    storageBucket: "somsritshirt-ced49.appspot.com",
                    messagingSenderId: "99816736698"
                };
                firebase.initializeApp(config);
                
                var db = firebase.firestore();
            </script>
            <script>
                function getParameterByName(name, url) {
                    if (!url) url = window.location.href;
                    name = name.replace(/[\[\]]/g, "\\$&");
                    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                        results = regex.exec(url);
                    if (!results) return null;
                    if (!results[2]) return '';
                    return decodeURIComponent(results[2].replace(/\+/g, " "));
                }
                
                var blogid = getParameterByName('id');
                var blogdata = {};
                var blogbody = [];
                
                if (!blogid) {
                    blogid = location.pathname.split('/')[2];
                }
                
                db.collection("blog").doc(blogid).get().then(function(data) {
                    if (data.exists) {
                        blogdata = data.data();
                        blogbody = blogdata.body;
                        main();
                    } else console.log("Blog doesn't exists");
                }).catch(function(e) {
                    console.log("Error",e);
                });
                
                function main() {
                    $(".topictext").text(blogdata.topic);
                    $(".blogidhref").attr('href',blogid);
                    blogbody.forEach(function(data) {
                        if (data.type==0) {
                            $('<p class="outerp"></p>').html(data.text).appendTo($(".bodypart"));
                        } else if (data.type==1) {
                            var wrapper = $("<div></div>").css("text-align","center");
                            $("<img></img>").attr("src",data.src).css("width",data.size+"%").appendTo(wrapper);
                            wrapper.appendTo($(".bodypart"));
                        }
                    });
                    
                    $("#fbsharebtn").click(function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href,"_blank");});
                    $("#tweetbtn").click(function(){window.open("https://twitter.com/intent/tweet?text="+blogdata.topic+" "+window.location.href,"_blank");});
                }
                
            </script>
        </body>
        </html>
        `;

    res.header('Content-Type', 'text/html');
    res.send(upper+ogimg+lower);
});

exports.httpxxx = functions.https.onRequest(app);*/