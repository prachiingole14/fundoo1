<?php
    //include '/var/www/html/CodeIgniter-3.1.10/application/models/AccountModel.php';

    class AccountService extends CI_Controller
    {
        private $connect;
        public $constants = "";
        public static $emailid = "";

        public function __construct()
        {
            parent::__construct();
            //$this->load->controller(AccountController());
        }

        public function Registration($firstname, $address,$contact, $email, $password, $confirm_password)
        {
            $this->name  = $data['name'];
            $this->address = $data['address'];
            $this->contact_no = $data['contact_no'];
            $this->email_id = $data['email_id'];
            $this->username = $data['username'];
            $this->password = $data['password'];
            $this->confirm_password = $data['confirm_password'];
            
            $query= $this->db->query("INSERT INTO Registration(`name`,`address`,`contact_no`,`email_id`,`password`,`confirm_password`) VALUE('$name','$address','$contact_no','$email_id','$password','$confirm_password')");
            print_r($query);

        //     $data = [
        //         'name' => $firstname,
        //         'address' => $address,
        //         'contact' => $contact_no,
        //         'email' => $email,
        //         'password' => $password,
        //         'confirm_password' => $confirm_password];
        //     $query = "INSERT into  Registration(`name`,`address`,`contact_no`,`email_id`,`password`,`confirm_password`) VALUE('$name','$address','$contact_no','$email_id','$password','$confirm_password')";
        //     $stmt = $this->db->conn_id->prepare($query);
        //     $res = $stmt->execute($datta);
        //     if ($res)
        //     {
        //         $data = array(
        //             "status" => "200",
        //         );
        //         print json_encode($data);
        //     } 
        //     else 
        //     {
        //         $data = array(
        //             "status" => "204",
        //         );
        //         print 
        //         $data = [
        //             'name' => $firstname,
        //             'address' => $address,
        //             'contact' => $contact_no,
        //             'email' => $email,
        //             'password' => $password,
        //             'confirm_password' => $confirm_password];
        //         $query = "INSERT into  Registration(`name`,`address`,`contact_no`,`email_id`,`password`,`confirm_password`) VALUE('$name','$address','$contact_no','$email_id','$password','$confirm_password')";
        //         $stmt = $this->db->conn_id->prepare($query);
        //         $res = $stmt->execute($datta);
        //         if ($res)
        //         {
        //             $data = array(
        //                 "status" => "200",
        //             );
        //             print json_encode($data);
        //         } json_encode($data);
        //         return "204";
        //     }
        // return $data;
        //     if($query)
        //     {
        //         return ("data inserted successfully");
        //     }
        //     else
        //     {
        //         return ("data inserted successfully");
        //     }
           
        }

        public function isRegistered($email,$password)
        {
            $data = array("email" => $email,
                          "password" => $password);
            $query     = "SELECT * FROM Registration WHERE email = '$email'";
            $statement = $this->db->conn_id->prepare($query);
            if($statement->execute($data))
            {
                $result = $statement->fetchAll();
                if($statement->rowCount() > 0)
                {
                    //looping over the row and verifying password
                    foreach($result as $row)
                    {
                        if(password_verify($password, $row["password"]))
                        {
                          return  print "login successfully";
                        }
                        else
                        {
                           return print "username or password is not matched";
                        }
                    }
                }   
            }
        }

        public function getlogin($email,$password)
        {
            $flag = $this->isRegistered($email,$password);
            if ($flag == 1) 
            {
                $query = "SELECT firstname,id FROM registeruser WHERE email = '$email'"; 
                $statement = $this->db->conn_id->prepare($query);
                $statement->execute();
                $arr = $statement->fetch(PDO::FETCH_ASSOC);
                $data = array("email" => $email,
                              "password" => $password);
                              return $data;
            }
        }    

    }
?>