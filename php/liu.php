<?php
include('./public.php');
$sql="select * from liu";
$res=$conn->query($sql);
while($row=$res->fetch_assoc()){
	$arr []=$row;
}
echo json_encode($arr);
?>