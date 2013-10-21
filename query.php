<?php

$query = $_POST['query'];
$contact = $_POST['contact'];

if ($query == "") {
	echo "-2";
}elseif ($contact == "") {
	echo "-1";
}else{

	$address = "apoorvjain103@gmail.com";
	// $address = 'webmaster.tabletennis@gmail.com';
	include('class.phpmailer.php');

	$sub = "Table Tennis Query";
	$message = "You have a query:<br/> ".$query."<br/> from: <br/><b>".$contact;

	$mail = new PHPMailer();
	$mail->IsSMTP();
			$mail->SMTPAuth   = true;                  // enable SMTP authentication
			$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
			$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
			$mail->Port       = 465;                   // set the SMTP port for the GMAIL server
			$mail->Username   = "webmaster.tabletennis@gmail.com";  // GMAIL username, consider changing
			$mail->Password   = "@email991";            // GMAIL password, consider changing
			$mail->AddReplyTo("queryscrolls13@gmail.com","First Last");
			$mail->From       = "queryscrolls13@gmail.com";//email id of PDF_set_text_rendering()
			$mail->CharSet    = "utf-8";

			$mail->FromName   = "Query";
			$mail->Subject    = $sub;
			$mail->Body = $message;

			$mail->AddAddress($address, "SI");
			$mail->WordWrap   = 50; 
					$mail->IsHTML(true); // send as HTML
					
					if($mail->Send()) 
					{
						$mail->ClearAllRecipients();
					}

				}

				?>