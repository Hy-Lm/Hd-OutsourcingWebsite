<?php
// 项目
include('./public.php');
$sql="select * from project";
$res=$conn->query($sql);
while($row=$res->fetch_assoc()){
	$row['img']=$URL.$row['img'];
	$arr [] =$row;
}
echo json_encode($arr);
?>