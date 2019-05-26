<!DOCTYPE html>
<html>
	<head>
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	<meta name="stats-in-th" content="2dad" />
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Bank Account</title>
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	<link rel="apple-touch-icon-precomposed" href="favicon.ico">
	<link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
	<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
	<meta http-equiv="Content-Language" content="th">
<style>
@font-face {
    font-family: 'sukhumvit_setthin';
    src: url('https://www.apple.com/th/global/fonts/sukhumvitset-thin-webfont.eot')/*tpa=https://www.apple.com/th/global/fonts/sukhumvitset-thin-webfont.eot*/;
    src: url('https://www.apple.com/th/global/fonts/sukhumvitset-thin-webfont.eot-#iefix')/*tpa=https://www.apple.com/th/global/fonts/sukhumvitset-thin-webfont.eot?#iefix*/ format('embedded-opentype'),
         url('https://www.apple.com/th/global/fonts/sukhumvitset-thin-webfont.woff')/*tpa=https://www.apple.com/th/global/fonts/sukhumvitset-thin-webfont.woff*/ format('woff'),
         url('https://www.apple.com/th/global/fonts/sukhumvitset-thin-webfont.ttf')/*tpa=https://www.apple.com/th/global/fonts/sukhumvitset-thin-webfont.ttf*/ format('truetype'),
         url('https://www.apple.com/th/global/fonts/sukhumvitset-thin-webfont.svg#sukhumvit_setthin')/*tpa=https://www.apple.com/th/global/fonts/sukhumvitset-thin-webfont.svg#sukhumvit_setthin*/ format('svg');
    font-weight: normal;
    font-style: normal;
}
chan {
	color: #007AFF;
	font-family: sukhumvit_setthin;
	font-size: 17px;
	font-weight: thin;
	line-height: 20px;
	margin: 0;
	padding: 10px;
	text-align: center;
}
.space  {
	height:3px;
	padding-top:10px;
	color:#007AFF;
	font-weight: bold;
	font-family: sukhumvit_setthin;
}
.f {
	font-family: sukhumvit_setthin;
}
</style>
</head>
<body>
	<div data-role="page" class="ui-page ui-page-theme-a ui-page-footer-fixed ui-page-active" style="padding-bottom: 36px;">
		<div data-role="header" >
			<a href="../" data-ajax="false" class="ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-left ui-icon-back">Back</a>
			<h1><chan id="pageTitle">บัญชีธนาคาร</chan></h1>
			<ul data-role="listview">
			<li>
				<img src"img/QR/<?php echo $_POST['id'] ?>">
				<center><h4><span class="f">การโอนเงิน</span></h4>
				<span class="f">สามารถทำได้ผ่านช่องทางดังนี้</span></center>
			</li>
		</div><!-- /header -->

		<div data-role="content">
			<ul data-role="listview">
				<li>
					<img src="img/promptpay-logo.jpg" onclick="window.open('img/QR/IMG_0631.JPG', '_top');"/>
					<h3><span class="space">ระบบพร้อมเพย์</span></h3>
					<p>เบอร์โทรศัพท์ 081-412-2475 <br>ชื่อบัญชี ภูมิรพี แซ่ตั้ง</p>
				</a></li>
	      <li>
					<img src="img//20121010100211.jpg" onclick="window.open('img/QR/IMG_0632.JPG', '_top');"/>
					<h3><span class="space">ธนาคารกสิกรไทย</span></h3>
					<p>เลขที่บัญชี 991-2-02508-7<br>
					ชื่อบัญชี ภูมิรพี แซ่ตั้ง</p>
				</a></li>
				<li>
					<img src="img/iyEeh0ga_400x400.jpg" onclick="window.open('img/QR/IMG_0631.JPG', '_top');"/>
					<h3><span class="space">ธนาคารทหารไทย (TMB BANK)</span></h3>
					<p>เลขที่บัญชี 271-2-00661-4<br>
					เลขที่บัญชี 079-2-26507-6<br>
					ชื่อบัญชี ภูมิรพี แซ่ตั้ง</p>
				</a></li>
				<li>
					<img src="img/scb-logo.jpg" />
					<h3><span class="space">ธนาคารไทยพาณิชย์</span></h3>
					<p>เลขที่บัญชี 407-0-90219-7<br>
					ชื่อบัญชี ภูมิรพี แซ่ตั้ง</p>
				</a></li>
				<li>
					<img src="img/ME.png" />
					<h3><span class="space">ME by TMB</span></h3>
					<p>เลขที่บัญชี 920-9-29052-8<br>
					เลขที่บัญชี 920-9-29050-2<br>
					ชื่อบัญชี ภูมิรพี แซ่ตั้ง</p>
				</a></li>
				<li>
					<img src="img/icbcthai.png" />
					<h3><span class="space">ธนาคารไอซีบีซี(ไทย) ICBC(Thai) 中国工商银行（泰国）</span></h3>
					<p>เลขที่บัญชี 106-0-04501-8<br>
					ชื่อบัญชี ภูมิรพี แซ่ตั้ง</p>
				</a></li>
				<li><a href="https://www.tmtopup.com/topup/?uid=29748">
					<img src="img/	unnamed.jpg" />
					<h3><span class="space">TrueMoney</span></h3>
					<p>เติมรหัสบัตรทรูมันนี่ 14 หลัก<br>>> คลิ๊กที่นี่ <<</p>
				</a></li>
				<li>
					<img src="img/246x0w.jpg" onclick="window.open('img/QR/IMG_0635.JPG', '_top');"	 />
					<h3><span class="space">TrueMoney Wallet</span></h3>
					<p>เบอร์โทรศัพท์ 06-4910-1858</p>
				</a></li>
				<li>
					<img src="img/alipay-logo.png" onclick="window.open('img/QR/IMG_0205.JPG', '_top');"/>
					<h3><span class="space">Alipay 支付宝</span></h3>
					<p>Account：chenshengtai2000@qq.com</p>
				</a></li>
				<li>
					<img src="img/wechatpay-500x500.png" onclick="window.open('img/QR/IMG_0634.JPG', '_top');"/>
					<h3><span class="space">WeChat Pay 微信支付</span></h3>
					<p>Account：chenshengtai2000</p>
				</a></li>
			</ul>
				<br>
				<center>~กดที่ Icon เพื่อแสดง QR Code สำหรับโอนเงิน~</center><br><br>
		</div><!-- /content -->

		<div data-role="footer" data-position="fixed">
			<i><script type="text/javascript" language="javascript1.1" src="https://tracker.stats.in.th/tracker.php?sid=73054"></script><noscript><a target="_blank" href="http://www.stats.in.th/">www.Stats.in.th</a></noscript>&copy;2019 ภูมิรพี แซ่ตั้ง</i>
		</div><!-- /footer -->

	</div><!-- /page -->
	<script>
		 function viewdata() {
			 var a = arguments[0];
			 var form = document.createElement("form");
			 form.method = "POST";
			 form.action = "view.html";
			 var input = document.createElement("input");
			 input.type = "hidden";
			 input.name = "id"
			 input.value = a;
			 form.appendChild(input);

			 document.body.appendChild(form);

			 form.submit();
		 }
	 </script>
</body>
</html>
