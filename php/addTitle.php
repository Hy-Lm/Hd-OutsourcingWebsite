<?php
// 连接数据库
include('./public.php');
// 接收的参数
$title=$_GET['title'];//节目内容
		// //--解析Json，获取对应的变量值
		// $titles=json_decode($title,TRUE);
		// $mesTitle = $titles;
		// $con=null;           //存储内容
		// foreach($mesTitle as $val){
		// 	$con.=$val.',';
		// }
		// 得到的标题整个数组字符串
		// $con= substr($con,0,strlen($con)-1);
		$sql="update banner set banner_title='$title'";
		$res=$conn->query($sql);
		if($res){
			echo 'ok';
		}else{
			echo 'no';
		}
?>