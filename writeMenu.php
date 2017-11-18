<?php
if($_GET['key']=='rQLFqUYa8LnwcIHqR47R68tzwFeIrkZoKk5mj0TI83fO4g3bnFWEMfELLOvl') {
  file_put_contents('menu.json', stripslashes(file_get_contents('php://input')));
  echo "success";
} else {
  echo "Unauthorized";
  echo $_GET['key'];
}
?>
