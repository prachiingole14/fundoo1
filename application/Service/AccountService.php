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
            $data = array("name" => $firstName,
                        "address" => $address,
                        "contact_no" => $contact, 
                        "email_id" => $email,
                        "password" => $password,
                        "confirm_password" => $confirmpassword);

            // $this->firstName  = $data['firstName'];
            // $this->address = $data['address'];
            // $this->contact_no = $data['contact_no'];
            // $this->email_id = $data['email_id'];
            // $this->password = $data['password'];
            // $this->confirmpassword = $data['confirmpassword'];
            
            $query= $this->db->query("INSERT INTO Registration(`name`,`address`,`contact_no`,`email_id`,`password`,`confirm_password`) VALUE('$firstName','$address','$contact','$email','$password','$confirmpassword')");
            print_r($query);
        }

        public function ResetPassword($email, $password, $newpassword)
        {
            $data = array("email" => $email,
                          "password" => $password,
                        "newpassword" => $newpassword);

            $this->email = $data['email'];
            $this->password = $data['$password'];
            $this->newpassword = $data['$newpassword'];

            $query = $this->db->query("UPDATE Registration SET password = 'newpassword' where email_id='$email'");
            print_r($query);
            
            
        }




        public function Registered($email,$password)
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
                          return  print "valid user you can reset your password";
                        }
                        else
                        {
                           return print "Email or Password is not matched";
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
                $query = "SELECT email_id,password FROM Registration WHERE email = '$email'"; 
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