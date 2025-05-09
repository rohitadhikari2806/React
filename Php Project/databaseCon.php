<center>
<?php
$servername="localhost";
$username="root";
$password="rohit";
$dbname="phptest";

$conn = mysqli_connect($servername,$username,$password,$dbname);
if (!$conn){
    echo "Error".$mysqli_connect_error();
}else{
    echo "Connected"."<br>"."<br>";
}

?>

</center>