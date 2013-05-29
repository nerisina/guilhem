<?php 
function secure($var){
	$var = array(
		'varName' => $_POST['name'], 
		'varLastName' => $_POST['last_name'],
		'email' =>$_POST['email'],
		'message' =>$_POST['message']);
	$variable = htmlentities(string_tags($var));

	return $variable
}
?>