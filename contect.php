<?php
if(isset($_POST['submit'])){
            $name=$_POST['name'];
            $name1=$_POST['code'];
            $name2=$_POST['mobile'];
            $name3=$_POST['email'];
            $name4=$_POST['comment'];
         $to = "info@orizensoft.com";
         $subject = $name."Details";
         
         $message = "Name::".$name."\n";
         $message .= "code::".$name1."\n";
         $message .= "phoneNo::".$name2."\n";
         $message .= "Email::".$name3."\n";
         $message .= "Message::".$name4."\n";
         
         $headers = "From:".$name1;
        
         
         $retval = mail ($to,$subject,$message,$headers);
         
         if( $retval == true ) {
             echo '<script>alert("Message sent successfully...")</script>';
            echo "<script>location.href='index.html';</script>";
         }else {
            echo "Message could not be sent...";
         }
}
      ?>