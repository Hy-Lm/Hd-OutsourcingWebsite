<?php
// 连接数据库
include('./public.php');
// 接收的参数
//判断数据库是否这个标题 有的话就是修改  没有的话就是增加
$id=$_POST['id'];//id
$title=$_POST['title'];//标题
	$BigTitle=$_POST['BigTitle'];//大标题
	$BigTitleCon=$_POST['BigTitleCon'];//大标题内容
	$SmallTitle=$_POST['SmallTitle'];//小标题
	$SmallTitle_con=null;           //存储内容
	foreach($SmallTitle as $val){
		$SmallTitle_con.=$val.',';
	}
	$SmallTitle_con= substr($SmallTitle_con,0,strlen($SmallTitle_con)-1);
	
	$SmallTitleCon=$_POST['SmallTitleCon'];//小标题内容
	$SmallTitleCon_con=null;           //存储内容
	foreach($SmallTitleCon as $val){
		$SmallTitleCon_con.=str_replace(',','-',$val).',';
	}
	$SmallTitleCon_con= substr($SmallTitleCon_con,0,strlen($SmallTitleCon_con)-1);
		// 图片
	$arr=$_FILES['imgs'];
		    $files=array();
		    for($i=0;$i<count($arr['name']);$i++){//count()统计数组键值name长度
		        $files[$i]['name']=$arr['name'][$i];
		        $files[$i]['type']=$arr['type'][$i];
		        $files[$i]['tmp_name']=$arr['tmp_name'][$i];
		        $files[$i]['error']=$arr['error'][$i];
		        $files[$i]['size']=$arr['size'][$i];
		    }
			$con=null;
		    for($i=0;$i<count($files);$i++){
		    //取得上传文件信息
		    $fileName=$files[$i]['name'];
		    $tempName=$files[$i]['tmp_name'];//临时文件名
		                //避免上传文件的中文名乱码
		                $fileName=iconv("UTF-8", "GBK", $fileName);//把iconv抓取到的字符编码从utf-8转为gbk输出
						// 截取后缀名
						$hou=pathinfo($fileName,PATHINFO_EXTENSION);
						$fileName=rand(10,1000).time().'.'.$hou;//在图片名称后加入时间戳，避免重名文件覆盖
		                move_uploaded_file($tempName, "images/".$fileName);
						$con.=$fileName.',';
		    }
	$SmallImg=substr($con,0,strlen($con)-1);//小标题图片
$sql="select * from industry where id='$id'";
$res=$conn->query($sql);
if($res->num_rows){
	// 有该标题，然后进行修改
	// $sql="update industry set title='$title' where id='$id'";
	$sql="update industry set title='$title',big_title='$BigTitle',big_title_con='$BigTitleCon',small_img='$SmallImg',small_title='$SmallTitle_con',small_title_con='$SmallTitleCon_con' where id='$id'";
	$res=$conn->query($sql);
	if($res){
		echo "<script>alert('修改成功');history.go(-1);</script>";
	}else{
		echo "<script>alert('修改失败')</script>";
	}
}else{//添加
	$sql="insert into industry (title,big_title,big_title_con,small_img,small_title,small_title_con) values('$title','$BigTitle','$BigTitleCon','$SmallImg','$SmallTitle_con','$SmallTitleCon_con')";
	$res=$conn->query($sql);
	if($res){
		echo "<script>alert('添加成功');history.go(-1);</script>";
	}else{
		echo "<script>alert('添加失败')</script>";
	}
}	
?>