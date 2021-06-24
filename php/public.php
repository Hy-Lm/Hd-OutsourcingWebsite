<?php
    // $conn=new mysqli('localhost','root','','hdwb');
	$conn=new mysqli('localhost','root','x4AFdY3ki4f5rCJA','huidait');
    $conn->query('set names utf8');
    header('Access-Control-Allow-Origin:*');
	if (!function_exists('array_column')) {
	 function array_column($arr2, $column_key) {
	  $data = [];
	  foreach ($arr2 as $key => $value) {
	   $data[] = $value[$column_key];
	  }
	  return $data;
	 }
	}
	$URL="./php/images";
	// $URL='http://192.168.7.108/item2/Hd-OutsourcingWebsite/php/images/';
?>