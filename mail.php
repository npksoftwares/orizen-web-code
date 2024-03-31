<?php
if(isset($_POST['submit'])){
            $name=$_POST['name'];
            $name1=$_POST['code'];
            $name2=$_POST['mobile'];
            $name3=$_POST['email'];
            $name4=$_POST['budget'];
            $name5=$_POST['file'];
            $name6=$_POST['comment'];
         $to = "info@orizensoft.com";
         $subject = $name."Details";
         
         if(!empty($name6) > 0){ 
         if(is_file($name6)){ 
        $message .= "--{$mime_boundary}\n"; 
        $fp =    @fopen($name6,"rb"); 
        $data =  @fread($fp,filesize($name6)); 
 
        @fclose($fp); 
        $data = chunk_split(base64_encode($data)); 
        $message .= "Content-Type: application/octet-stream; name=\"".basename($name6)."\"\n" .  
        "Content-Description: ".basename($name6)."\n" . 
        "Content-Disposition: attachment;\n" . " filename=\"".basename($name6)."\"; size=".filesize($name6).";\n" .  
        "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n"; 
    } 
} 
         
         $message = "Name::".$name."\n";
         $message .= "code::".$name1."\n";
         $message .= "PhoneNo::".$name2."\n";
         $message .= "EailId::".$name3."\n";
         $message .= "budget::".$name4."\n";
         $message .= "files::".$name5."\n";
         $message .= "Message::".$name6."\n";
         
 
         
         
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