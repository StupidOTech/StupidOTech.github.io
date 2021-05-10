<!DOCTYPE html>
<html>
<body>

   <?php
    $a="StupidO";
    $b="Best";


        function writeMyThing()
        
        {
		global $a, $b;
        echo $a, " is the ", $b;


        }
        writeMyThing();
     ?>



     <?php
function familyName($fname) {
  echo "$fname StupidO.<br>";
}

familyName("Pierre");
familyName("M");
familyName("E");
familyName("K");
familyName("A");
?>
<?php
function familyName($fname, $year) {
  echo "$fname StupidO. Born in $year <br>";
}

familyName("Pierre", "1111");
familyName("M", "0000");
familyName("E", "0101");
?>



<?php declare(strict_types=1); // strict requirement
function setHeight(int $minheight = 50) {
  echo "The height is : $minheight <br>";
}

setHeight(350);
setHeight(); // will use the default value of 50
setHeight(135);
setHeight(80);
?>


<?php declare(strict_types=1); // strict requirement
function sum(int $x, int $y) {
  $z = $x + $y;
  return $z;
}

echo "5 + 10 = " . sum(5, 10) . "<br>";
echo "7 + 13 = " . sum(7, 13) . "<br>";
echo "2 + 4 = " . sum(2, 4);
?>

<?php declare(strict_types=1); // strict requirement
function addNumbers(float $a, float $b) : float {
  return $a + $b;
}
echo addNumbers(1.2, 5.2);
?>

<?php
function add_five(&$value) {
  $value += 5;
}

$num = 2;
add_five($num);
echo $num;
?>







</body>
</html>