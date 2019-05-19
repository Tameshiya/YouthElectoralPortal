<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>Отправляем вопрос</title>
<meta http-equiv="refresh" content="2; URL='index.php'" />
</head>
<body>

<?php
  $jsonurl = 'http://127.0.0.1:8081/feedback/';

  $data = array(
    'name' => $_POST['name'],
    'email' => $_POST['email'],
    'text' => $_POST['text']
  );
  //var_dump(http_build_query($data));
  // use key 'http' even if you send the request to https://...
  $options = array(
    'http' => array(
        'header'  => "Content-type: application.json\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
  );
  /*$context  = stream_context_create($options);
  $result = file_get_contents($url, false, $context);*/
  $ch = curl_init($jsonurl);
  curl_setopt_array($ch, array(
      CURLOPT_POST => TRUE,
      CURLOPT_RETURNTRANSFER => TRUE,
      CURLOPT_HTTPHEADER => array(
          'Content-Type: application/json'
      ),
      CURLOPT_POSTFIELDS => json_encode($data)
  ));

  // Send the request
  $response = curl_exec($ch);
  if ($response) {
     echo "При отправке вопроса произошла ошибка";
  } else {
    echo 'Добавление вопроса прошло успешно!';
  }

 ?>
</body>

</html>
