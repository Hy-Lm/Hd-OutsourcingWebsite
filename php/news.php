<?php
include('./public.php');
date_default_timezone_set('prc'); //中国北京时间
$sql="select * from news";
$res=$conn->query($sql);
while($row=$res->fetch_assoc()){
	// $row['img']=$URL.$row['img'];
	$arr [] =$row;
}
$order_col=array_column($arr,'time');
array_multisort($order_col,SORT_DESC,$arr);//排序，按照时间排序
echo json_encode($arr);
?>