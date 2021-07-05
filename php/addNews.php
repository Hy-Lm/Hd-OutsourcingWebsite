<?php
// 连接数据库
include('./public.php');
// 判断数据库是否这个id 有的话就是修改  没有的话就是增加
$id=$_POST['id'];
// 接收的参数
$title=$_POST['title'];//标题
$file=$_FILES['img'];//以传递过来的图片路径
// echo $name.$file;
if(is_uploaded_file($file['tmp_name'])){//$file['tmp_name'] 临时路径
// 截取后缀名
$hou=pathinfo($file['tmp_name'],PATHINFO_EXTENSION);
$fileName=rand(10,1000).time().'.'.$hou;//在图片名称后加入时间戳，避免重名文件覆盖
move_uploaded_file($file['tmp_name'], "images/".$fileName);
}

$sql="select * from news where id='$id'";
$res=$conn->query($sql);
if($res->num_rows){
	// 有该id，然后进行修改
	$sql="update news set img='$fileName',title='$title' where id='$id'";
	$res=$conn->query($sql);
	if($res){
		echo "<script>alert('修改成功');history.go(-1);</script>";
	}else{
		echo "<script>alert('修改失败')</script>";
	}
}else{//添加
	$sql="insert into news (img,title) values('$fileName','$title') ";
	$res=$conn->query($sql);
	if($res){
		echo "<script>alert('添加成功');history.go(-1);</script>";
	}else{
		echo "<script>alert('添加失败')</script>";
	}
}
?>