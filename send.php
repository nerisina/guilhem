<?php

$varName = strip_tags(htmlspecialchars(trim($_POST['name'], ENT_QUOTES))); 
$varLastName = strip_tags(htmlspecialchars(trim($_POST['last_name'], ENT_QUOTES)));
$email = strip_tags(htmlspecialchars(trim($_POST['email'], ENT_QUOTES)));
$message = strip_tags(htmlspecialchars(trim($_POST['message'], ENT_QUOTES)));

// multiple recipients
$to = "neri.esparza@gmail.com";

// subject
$sujet = ucwords($varName) .' ' . ucwords($varLastName) .' '.'wants contact you';

// message
$message = '<b>From :</b>'.ucwords($varName) .' ' . ucwords($varLastName) .' '.'<br><b>E-mail:</b> <br>'.$email ."<br><b>Message :</b>". $message;

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'To: '.ucwords($varName).' '.ucwords($varLastName).' <'.$email.'>, Guilhem de Valicourt <guilhem.de_valicourt@alcatel-lucent.com>' . "\r\n";
$headers .= 'From: Contact Guilhem <no-reply@guilhemdevalicourt.com>' . "\r\n";
$headers .= 'Cc: neri.esparza@gmail.com' . "\r\n";
$headers .= 'Bcc: neri_mer@hotmail.com' . "\r\n";

$status = mail($to, $sujet, $message, $headers);




if($status){
	echo "Your message was sending";
}
else{
	echo "Sorry your message wasen't send, please try again!";
}

?>