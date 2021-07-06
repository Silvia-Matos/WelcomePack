<?php
$to = 'welcomepack.newsletter@gmail.com'; 
$from = 'welcomepack.newsletter@gmail.com'; 
$fromName = 'Welcome Pack'; 
$subject = "Newsletter"; 
$htmlContent = file_get_contents('./Newsletter.html'); 
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
$headers .= 'From: '.$fromName.'<'.$from.'>' . "\r\n"; 
 
if(mail($to, $subject, $htmlContent, $headers)){ 
    echo 'Email has sent successfully.'; 
}else{ 
   echo 'Email sending failed.'; 
}
?>