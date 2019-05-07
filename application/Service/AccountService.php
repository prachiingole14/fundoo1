<?php
    
    class AccountService extends CI_Controller
    {
        private $connect;
        public $constants = "";
        public static $emailid = "";

        public function __construct()
        {
            parent::__construct();
            $this->load->controllers(AccountController());
        }

        public function Registration($firstName, $address,$contact, $email, $password, $confirmpassword)
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

        public function getlogin($email,$password)
        {
            $flag = $this->isRegistered($email,$password);
            if ($flag == 1) 
            {
                $query = "SELECT firstname,id FROM registeruser WHERE email = '$email'"; 
                $statement = $this->db->conn_id->prepare($query);
                $statement->execute();
                $arr = $statement->fetch(PDO::FETCH_ASSOC);
                $firstname = $arr['firstname'];
                $id = $arr['id'];

                $secret_key = "abc";

                $data = array(
                    "firstname" => $firstname,
                    "email" => $email,
                    "id" => $id
                );

                $token = JWT::encode($data, $secret_key);

                $connection = new Redis();
                $client = $connection->connection();

                $client->set('token', $token );
                $response = $client->get('token');

                $data = array(
                    "token"   => $token,
                    "message" => "400",
                );
                print json_encode($data);
                return "400";


            } else if ($flag == 2) {
                $data = array(
                    "message" => "401",
                );
                print json_encode($data);
                return "401";

            } 
            else if ($flag == 3) 
            {
                $data  = array(
                    "message" => "200",
                );
                print json_encode($data);
                return "200";
            } 
            return $data;
        }
    

        public function isRegistered($email,$password)
        {
            $data[':email'] = $email;
            $query     = "SELECT * FROM registeruser WHERE email = '$email'";
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
                            return 1;
                        }
                        else
                        {
                            return 2;
                        }
                    }
                }
                else
                {
                    return 3;
                }
                
            }
        }

        // public function ResetPassword($email, $password, $newpassword)
        // {
        //     if($this->isRegistered($email,$password))
        //     {
        //         $data = array("email" => $email,
        //                         "password" => $password,
        //                         "newpassword" => $newpassword);

        //         $this->email = $data['email'];
        //         $this->password = $data['$password'];
        //         $this->newpassword = $data['$newpassword'];

        //         $query = $this->db->query("UPDATE Registration SET newpassword = 'password' where email_id='$email'");
        //         print_r($query);
        //     }
        // }   
}
?>