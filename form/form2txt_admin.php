<?php
/******************************************************************************\
* PHP Form 2 Text                              Version 1.0                     *
* Copyright 2000 Frederic TYNDIUK (FTLS)       All Rights Reserved.            *
* E-Mail: tyndiuk@ftls.org                     Script License: GPL             *
* Created  02/28/2000                          Last Modified 02/28/2000        *
* Scripts Archive at:                          http://www.ftls.org/php/        *
*******************************************************************************/
// Necessary Variables:

$MESSAGE_FILE = "data.txt";
	// ใส่ชื่อไฟล์ฐานข้อมูล ที่เป็น .txt

$LOGIN = "admin";
$PASSWORD = "p@55w0rd";
	// ใส่ Login และ Password ที่ต้องการสำหรับ Admin

$EXIT_URL = "adminlogout.htm";
	// ใส่ URL ของเว็บที่ต้องการให้ไปหลังออกจากระบบ Admin

// End  Necessary Variables section
/******************************************************************************/

function error ($error_message) {
	echo $error_message."<BR>";
	exit;
}

if ($HTTP_POST_VARS['BT_Exit'] != "") {
	header("Location: $EXIT_URL");
}

if ( (!isset($_SERVER['PHP_AUTH_USER'])) || ! (($_SERVER['PHP_AUTH_USER'] == $LOGIN) && ( $_SERVER['PHP_AUTH_PW'] == "$PASSWORD" )) ) {
	header("WWW-Authenticate: Basic entrer=\"Form2txt admin\"");
	header("HTTP/1.0 401 Unauthorized");
	error("Unauthorized access...");
}
?> 

<HTML><HEAD><TITLE>หน้าแสดงข้อมูลที่ถูกส่งมาทาง Form</TITLE></HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=tis-620">
<BODY BGCOLOR="#CCFFCC">
<BR><P ALIGN="Center"><FONT FACE="Ms Sans Serif" SIZE="6" COLOR="#6666FF"><STRONG>หน้าแสดงข้อมูลที่ถูกส่งมาทาง Form</STRONG></FONT></P><BR>

<?php
if (! file_exists($MESSAGE_FILE))
	error("Can't find file, check '\$MESSAGE_FILE' var...");

$file_arry = file($MESSAGE_FILE); //or error("Can not open \$MESSAGE_FILE");


if (($HTTP_POST_VARS['BT_Suppress'] != "") && is_array($HTTP_POST_VARS['select']))  {
	while (list($HTTP_POST_VARS['key'], $HTTP_POST_VARS['val']) = each($HTTP_POST_VARS['select'])) {
		if ($HTTP_POST_VARS['val'] != "") {
			$file_arry[$HTTP_POST_VARS['val']] = "";
			$modif = 1;
		}
	}

	if ($modif) {
		$txt = join('', $file_arry);
		$fp = fopen("$MESSAGE_FILE", "w"); // error("Can not write \$MESSAGE_FILE");
		flock($fp, 1);
		fputs($fp, $txt);                                                     
		flock($fp, 3);
		fclose($fp);
	}
}


echo "<FORM METHOD=POST><TABLE cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#800000\" Border=\"1\" WIDTH=\"50%\" ALIGN=\"CENTER\"><TR><TD><center><font face=\"MS Sans Serif\" color=\"#000080\"><b>ลำดับที่</b></font></center></TD><TH><center><font face=\"MS Sans Serif\" color=\"#000080\">รายละเอียด</font></center></TH></TR>";

$no = 0;
while (list($key, $val) = each($file_arry)) {
	if ($val != "") {
		$no++;
		echo "<TR><TD><center><font face=\"MS Sans Serif\" color=\"#0000FF\"><INPUT type=\"checkbox\" Name=\"select[$key]\" value=\"$key\"> $no</font></center></TD><TH><font face=\"MS Sans Serif\" color=\"#000000\"><p align=\"left\">$val</p></font></TH></TR>";
	}
}
echo "</TABLE><BR>";
echo "<CENTER><INPUT TYPE=\"Submit\" Value=\"ลบข้อมูลที่เลือก\" NAME=\"BT_Suppress\"><INPUT TYPE=\"Submit\" Value=\"ออกจากระบบ\" NAME=BT_Exit></CENTER></FORM>";
?>

<CENTER><BR>
	<FONT FACE="Arial" SIZE=-2>
	<EM>&copy Copyright 2000 <A HREF="http://www.ftls.org/ftls.shtml">FTLS</A> (Tyndiuk Fr&eacute;d&eacute;ric). All rights reserved.
	<BR>FTLS's PHP Scripts Archive : <A HREF="http://www.ftls.org/php/">http://www.ftls.org/php/</A></EM></FONT>
</CENTER></BODY></HTML>
