<?php
      $server = "sql311.epizy.com";
      $username = "epiz_26239221";
      $password = "nCk3zEbBRto5uv";
      $dbname = "epiz_26239221_fgejn";

      $conn = mysqli_connect($server, $username, $password, $dbname);
      
      if(!$conn){
          die("Connection Failed:".msqli_conenct_error());
      }




?>