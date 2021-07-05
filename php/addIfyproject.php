<?php
// 连接数据库
include('./public.php');
// 接收的参数
// 判断数据库是否这个id 有的话就是修改  没有的话就是增加
$id=$_POST['id'];
$name=$_POST['name'];//名称
$title=$_POST['title'];//标题
$title_con=$_POST['title_con'];//标题
$file=$_FILES['imgs'];//以传递过来的图片路径
// echo $name.$file;
if(is_uploaded_file($file['tmp_name'])){//$file['tmp_name'] 临时路径
// 截取后缀名
$hou=pathinfo($file['tmp_name'],PATHINFO_EXTENSION);
$fileName=rand(10,1000).time().'.'.$hou;//在图片名称后加入时间戳，避免重名文件覆盖
move_uploaded_file($file['tmp_name'], "images/".$fileName);
}
$sql="select * from ifyproject where id='$id'";
$res=$conn->query($sql);
if($res->num_rows){
	// 有该标题，然后进行修改
	$sql="update ifyproject set name='$name',title='$title',imgsrc='$fileName',title_con='$title_con' where id='$id'";
	$res=$conn->query($sql);
	if($res){
		echo "<script>alert('修改成功');history.go(-1);</script>";
	}else{
		echo "<script>alert('修改失败')</script>";
	}
}else{//添加
	$sql="insert into ifyproject (name,title,imgsrc,title_con) values('$name','$title','$fileName','$title_con') ";
	$res=$conn->query($sql);
	if($res){
		echo "<script>alert('添加成功');history.go(-1);</script>";
	}else{
		echo "<script>alert('添加失败')</script>";
	}
}
?>