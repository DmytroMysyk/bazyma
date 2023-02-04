<?php


//varible setting
 $name = $_REQUEST['name'];
 $email = $_REQUEST['Email'];
 $message = $_REQUEST['Message'];
 $photos = $_REQUEST['photos'];
 $subject = "Message from Contact form !";

 $to ="nata2310@ukr.net";  // change receiving email id 
 
 $content = "Name : ". $name. "\r\nContact email : ". $email. "\r\n \r\nMessage : \r\n \r\n".$message. "\r\n\r\n Photos :" . $photos; // name [break] email [break] message
 


// check input fields
if ( empty($name)|| empty($email) )
{
echo"<script type='text/javascript'>alert('Please fill all correct');
    window.history.go(-1);
    </script>";
}
else 
{ mail($to,$subject,$content);

    echo"<script type='text/javascript'>alert('Your message sent succesfully ');
    window.history.go(-1);
    </script>";
}


?>