<?php

require("./dbconnect.php");

$stmt = $pdo->prepare("SELECT * from big_questions"); //この時点で配列
$stmt->execute();
$big_questions = $stmt->fetchAll(PDO::FETCH_ASSOC); //$stmtに色々作業していく、最後にbigquestionsという変数にお全部入れる
print_r($big_questions);

// if (isset($_GET['id'])) {
//   $id = $_GET['id'];
// }
?>


<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="../reset.css">
  <title>Document</title>
</head>

<body>
  <?php echo $id; ?>
  <h1 id="title">ガチで東京の人しか解けない！ #<?php echo $big_questions[0]["name"]; //フロントに表示したいときはecho ?>  
  </h1>
  

  <section class="main" id="box">
  </section>
  <script src="../index.js"></script>
</body>

</html>