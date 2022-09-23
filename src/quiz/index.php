<?php

require("./dbconnect.php");

$stmt = $pdo->prepare("SELECT * from big_questions"); //この時点で配列
$stmt->execute();
$big_questions = $stmt->fetchAll(PDO::FETCH_ASSOC); //$stmtに色々作業していく、最後にbigquestionsという変数にお全部入れる
// print_r($big_questions);

$stmt = $pdo->prepare("SELECT * from questions where big_question_id=1"); //この時点で配列
$stmt->execute();
$questions = $stmt->fetchAll(PDO::FETCH_ASSOC);
print_r($questions);


$stmt = $pdo->prepare("SELECT * FROM choices INNER JOIN questions ON choices.question_id = questions.id where big_question_id=1"); 
$stmt->execute();
$choices = $stmt->fetchAll(PDO::FETCH_ASSOC);
print('<pre>');
print_r($choices);
print('</pre>');

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
  <h1 id="title">ガチで東京の人しか解けない！ #<?php echo $big_questions[0]["name"]; //フロントに表示したいときはecho ?>  
  </h1>
  

  <section class="main" id="box">
    <h2 class="quizbox" id="quiz${i}"><?php echo $questions[0]["id"]?>. この地名はなんて読む？</h2>
      <div class="quiz-image-container">
        <img class="quiz-image${i+1}" src="image/<?php echo $questions[0]["image"] ?>" alt="">
      </div>
      <ul id>
        <?php foreach ($choices as $choice){ ?>
           <li class="choice" id="1"> <?php echo $choice["name"]; ?></li>
          <?php }; ?>
      </ul>
      </div>
  </section>
  <!-- <script src="../index.js"></script> -->
  
</body>

</html>