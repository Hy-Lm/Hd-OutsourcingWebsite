<?php
// 行业
include('./public.php');
// echo '1';
$sql="select * from industry";
$res=$conn->query($sql);
// $row=$res->fetch_assoc();
while($row=$res->fetch_assoc()){
	// print_r($row);
	// 进行数组的切割
	// 小标题图片
	$row['small_img']=explode(',',$row['small_img']);
	$imgs=[];
	foreach($row['small_img'] as $key=>$val){
		array_push($imgs,$URL.$val);
	}
	$row['small_img']=$imgs;
	// 小标题
	$row['small_title']=explode(',',$row['small_title']);
	// 小标题内容
	$row['small_title_con']=explode(',',$row['small_title_con']);
	foreach($row['small_title_con'] as $key=>$value){
		$row['small_title_con'][$key]=explode('-',$value);
	}
	$arr []=$row;
}

echo json_encode($arr);
?>