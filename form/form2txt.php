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
	
$DEFAULT_EXIT_PAGE = "submitsuc.htm";
	// ใส่ URL ของเว็บที่ต้องการให้ไปหลังจากกดปุ่ม Submit

// End  Necessary Variables section
/******************************************************************************/

function error($error_message) {
	echo $error_message."<BR>";
	exit;
}

function check_referer () {
	global $REFERERS, $HTTP_REFERER;
	if ($HTTP_REFERER != "")
		while (list($val, $ref) = each($REFERERS))
			if (preg_match("/^http:\/\/$ref/", $HTTP_REFERER))
				return;
	error("Unauthorized access to: $HTTP_REFERER"); 
}

#check_referer();

$message = 	"Date : ".date("d/m/Y")."<BR>";

while (list($key, $val) = each($HTTP_POST_VARS)) { 
	$message .= "$key : ".htmlspecialchars($val)."<BR>"; 
} 

$message = preg_replace("/\n\r*/", "<BR>", $message); 

$file_arry = file($MESSAGE_FILE); //or error("Can not open \$MESSAGE_FILE");
$file = join ("", $file_arry);
$message .= "\n".$file;

$fp = fopen("$MESSAGE_FILE", "w"); // error("Can not write \$MESSAGE_FILE");
flock($fp, 1);
fputs($fp, $message);                                                     
flock($fp, 3);
fclose($fp);


if(! $exit_page)
	$exit_page = $DEFAULT_EXIT_PAGE;

Header("Location: ".$exit_page);
	// Exit -> $exit_page

?> 