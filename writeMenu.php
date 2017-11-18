<?php
if($_GET['key']=='rQLFqUYa8LnwcIHqR47R68tg3bnFWEMfELLOvl') {
  file_put_contents('menu.json', file_get_contents('php://input'));
  echo "success";
} else {
  echo "Unauthorized";
  echo $_GET['key'];
}
?>
