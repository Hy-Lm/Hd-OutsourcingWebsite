<?php
// 修改小程序介绍
// 连接数据库
include('./public.php');
// 接收的参数
$con1=$_GET['con1'];
$con2=$_GET['con2'];
$con3=$_GET['con3'];
$con4=$_GET['con4'];
$con5=$_GET['con5'];
$con6=$_GET['con6'];
// 更新数据库
$sql="update con set con1='$con1',con2='$con2',con3='$con3',con4='$con4',con5='$con5',con6='$con6'";
$res=$conn->query($sql);
if($res){
	echo 'ok';
}else{
	echo 'no';
}
?>