<?php
phpinfo();

$host = "db";
$dbname = "quizy";
$user = "root";
$password = "secret";

try {
  $pdo = new PDO(
      "mysql:dbname=$dbname;host=$host;charset=utf8mb4",
      $user,
      $password,
      [
          PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
          PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      ]
  );
  
  echo("接続成功");

} catch (PDOException $e) {
  exit($e->getMessage()); 
}

 if(isset($_GET['id'])) {
   $id = $_GET['id']; 
  } 
?>


<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="reset.css">
  <title>Document</title>
</head>

<body>
  <?php echo $id;?>
  <h1 id="title">ガチで東京の人しか解けない！ #東京の難読地名クイズ</h1>
  <section class="main" id="box">
  </section>
<script src="index.js"></script>
</body>

</html>

