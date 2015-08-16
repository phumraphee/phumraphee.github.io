<?php
$file = 'log.txt'; 
$ipaddress = $_SERVER['REMOTE_ADDR'];
$date = date('d/F/Y h:i:s');
$browser = $_SERVER['HTTP_USER_AGENT'];
$fp = fopen($file, 'a'); 
$fwrite($fp, $ipaddress.' '.$date.' '.$browser"\r\n"); 
fclose($fp);
?>