<?php
include('./public.php');
// 添加背景图片
$arr=$_FILES['imgs'];
	    $files=array();
	    for($i=0;$i<count($arr['name']);$i++){//count()统计数组键值name长度
	        $files[$i]['name']=$arr['name'][$i];
	        $files[$i]['type']=$arr['type'][$i];
	        $files[$i]['tmp_name']=$arr['tmp_name'][$i];
	        $files[$i]['error']=$arr['error'][$i];
	        $files[$i]['size']=$arr['size'][$i];
	    }
	    for($i=0;$i<count($files);$i++){
	    //取得上传文件信息
	    $fileName=$files[$i]['name'];
	    $tempName=$files[$i]['tmp_name'];//临时文件名
	                //避免上传文件的中文名乱码
	                $fileName=iconv("UTF-8", "GBK", $fileName);//把iconv抓取到的字符编码从utf-8转为gbk输出
	                $fileName=str_replace(".", time().".", $fileName);//在图片名称后加入时间戳，避免重名文件覆盖
	                move_uploaded_file($tempName, "images/".$fileName);
					$val.=$fileName.',';
	    }
		// 得到多张图片字符串的路径
		$val= substr($val,0,strlen($val)-1);
		$sql="update banner set bannerImgs='$val'";
		$res=$conn->query($sql);
		if($res){
			echo "<script>alert('图片替换成功');history.go(-1);</script>";
			
		}else{
			echo "<script>alert('图片替换失败')</script>";
		}
?>