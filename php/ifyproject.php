<?php
include('./public.php');
// 找到单个的name值
$sql1="select * from ifyproject";
$res1=$conn->query($sql1);
$nameArr=[];
while($row1=$res1->fetch_assoc()){
	array_push($nameArr,$row1['name']);
}
$nameArr=array_unique($nameArr);
$myArrays=[];
foreach($nameArr as $key=>$val){
	$sql="select * from ifyproject where name='$val'";
	$res=$conn->query($sql);
	$arrs=[];
	while($row=$res->fetch_assoc()){
		$row['imgsrc']=$URL.$row['imgsrc'];
		// $name=$row['name'];
		// unset($row['name']);
		// $arr []=$row;
		array_push($arrs,$row);
	}
	$myArray= (object) array('name'=>$val,'all' =>$arrs); //将多个对象添加给一个数组给数组
	// echo json_encode($myArray);
	array_push($myArrays,$myArray);
}
echo json_encode($myArrays);
?>