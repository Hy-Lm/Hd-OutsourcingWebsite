<?php
include('./public.php');
// 接收的参数
$text=$_GET['text'];//反馈的内容
$name=$_GET['name'];//反馈的内容
$tel=$_GET['tel'];//反馈的内容
$sql="insert into liu (name,tel,text) values('$name','$tel','$text')";
$res=$conn->query($sql);
if($res){
	echo 'ok';
}else{
	echo 'no';
}
?>