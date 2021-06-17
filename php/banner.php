<?php
// 轮播背景
include('./public.php');
// echo '1';
$sql="select * from banner";
$res=$conn->query($sql);
$row=$res->fetch_assoc();
// 进行数组的切割
$row['bannerImgs']=explode(',',$row['bannerImgs']);
$imgs=null;
foreach($row['bannerImgs'] as $val){
	$imgs.=$URL.$val.',';
}
$row['bannerImgs']=explode(',',$imgs);
$row['banner_title']=explode(',',$row['banner_title']);
echo json_encode($row);
?>