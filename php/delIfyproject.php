<?php
// 连接数据库
include('./public.php');
// 接收的参数
$id=$_GET['id'];
$sql="delete from ifyproject where id='$id'";
$res=$conn->query($sql);
if($res){
	echo 'ok';
}else{
	echo 'no';
}
?>