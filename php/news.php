<?php
include('./public.php');
date_default_timezone_set('prc'); //中国北京时间
$sql="select * from news";
$res=$conn->query($sql);
while($row=$res->fetch_assoc()){
	$row['img']=$URL.$row['img'];
	$arr [] =$row;
}
echo json_encode($arr);
?>