<?php
// 连接数据库
include('./public.php');
// 接收的参数
$name=$_POST['name'];//名称
$title=$_POST['title'];//标题
$file=$_FILES['imgsrc'];//以传递过来的图片路径
// echo $name.$file;
if(is_uploaded_file($file['tmp_name'])){//$file['tmp_name'] 临时路径
$hou=pathinfo($file['name'],PATHINFO_EXTENSION);
$fileName=rand(10,1000).time().'.'.$hou;//在图片名称后加入时间戳，避免重名文件覆盖
move_uploaded_file($file['tmp_name'],$fileName);
}
// 判断数据库是否这个id 有的话就是修改  没有的话就是增加
$id=$_POST['id'];
$sql="select * from ifyproject where id='$id'";
$res=$conn->query($sql);
if($res->num_rows){
	// echo 'ok';
	// 有该标题，然后进行修改
	$sql="update ifyproject set name='$name',title='$title',imgsrc='$fileName'  where id='$id'";
	$res=$conn->query($sql);
	if($res){
		echo 'ok';
	}else{
		echo 'no';
	}
}else{//添加
	// echo 'no';
	$sql="insert into ifyproject (name,title,imgsrc) values('$name','$title','$fileName') ";
	$res=$conn->query($sql);
	if($res){
		echo 'ok';
	}else{
		echo 'no';
	}
}
?>