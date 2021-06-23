<?php
include('./public.php');
// 收集的数据
$name=$_GET['name'];
$pass=$_GET['pass'];
$sql="select * from login where name='$name' and pass='$pass'";
$res=$conn->query($sql);
if($res){
	echo 'ok';
}else{
	echo 'no';
}
?>