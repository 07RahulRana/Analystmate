<?php

$ip = getenv("REMOTE_ADDR");
$Fecha= date('d-m-Y');
$Hora= date('H:i:s');

$correo="connect@analystmate.com";

$subj="New Enquiry From Website- $ip";
$from= "From:Analystmate Academy
- Excel & Power BI Training - $ip <connect@analystmate.com>";

$user_agent = getenv("HTTP_USER_AGENT");

$usuarioname=$_POST['S_name'];
$usuariomobile=$_POST['S_phone'];
$usuarioemail=$_POST['S_email'];
$usuariocourse=$_POST['S_course'];

$usuariomessage=$_POST['message'];


$content = "
Date: $Fecha / Hour: $Hora

User-Agent: $user_agent

Login IP: $ip Details:

----------------------------------------------------------------------------------------
Full Name: $usuarioname
Mobile: $usuariomobile
Email: $usuarioemail
Course: $usuariocourse
Message : $usuariomessage


----------------------------------------------------------------------------------------";

mail($correo, $subj, $content, $from);

?>
<SCRIPT LANGUAGE="JavaScript">
location.href='thanks.html';
</SCRIPT>
