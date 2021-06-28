<?php
// 连接数据库
include('./public.php');
// 判断数据库是否这个id 有的话就是修改  没有的话就是增加
$id=$_GET['id'];
// 接收的参数
$time=$_GET['time'];//新闻时间
$title=$_GET['title'];//标题
$sql="select * from news where id='$id'";
$res=$conn->query($sql);
if($res->num_rows){
	// echo 'ok';
	// 有该id，然后进行修改
	$sql="update news set time='$time',title='$title' where id='$id'";
	$res=$conn->query($sql);
	if($res){
		echo 'ok';
	}else{
		echo 'no';
	}
}else{//添加
	// echo 'no';
	$sql="insert into news (time,title) values('$time','$title') ";
	$res=$conn->query($sql);
	if($res){
		echo 'ok';
	}else{
		echo 'no';
	}
}
?>