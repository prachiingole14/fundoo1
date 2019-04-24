<?php

    class AccountService extends CI_Model
    {

        public function __construct()
        {
            parent::__construct();
            //$this->load->controller(AccountController());
        }

        public function registration($firstname, $address,$contact, $email, $password, $confirm_password)
        {
            // $this->name  = $data['name'];
            // $this->address = $data['address'];
            // $this->contact_no = $data['contact_no'];
            // $this->email_id = $data['email_id'];
            // $this->username = $data['username'];
            // $this->password = $data['password'];
            // $this->confirm_password = $data['confirm_password'];
            
            //$query= $this->db->query("INSERT INTO Registration(`name`,`address`,`contact_no`,`email_id`,`password`,`confirm_password`) VALUE('$name','$address','$contact_no','$email_id','$password','$confirm_password')");

            //    print_r($query);



            $data = [
                'name' => $firstname,
                'address' => $address,
                'contact' => $contact_no,
                'email' => $email,
                'password' => $password,
                'confirm_password' => $confirm_password];

            $query = "INSERT into  Registration(`name`,`address`,`contact_no`,`email_id`,`password`,`confirm_password`) VALUE('$name','$address','$contact_no','$email_id','$password','$confirm_password')";
            $stmt = $this->db->conn_id->prepare($query);
            $res = $stmt->execute($datta);
            if ($res)
            {
                $data = array(
                    "status" => "200",
                );
                print json_encode($data);

            } 
            else 
            {
                $data = array(
                    "status" => "204",
                );
                print json_encode($data);
                return "204";

            }
        

        return $data;

            if($query)
            {
                return ("data inserted successfully");
            }
            else
            {
                return ("data inserted successfully");
            }
           
        }
    }
?>