<?php

    class UserDataController extends CI_Controller
    {

        public function __construct()
        {
            parent::__construct();
            $this->load->controller(UserDataController());
        }

        public function registration($firstname, $address, $email, $password)
        {
            $this->name  = $data['name'];
            $this->address = $data['address'];
            $this->contact_no = $data['contact_no'];
            $this->email_id = $data['email_id'];
            $this->username = $data['username'];
            $this->password = $data['password'];
            $this->confirm_password = $data['confirm_password'];

            //     $query = "INSERT into registration() values ()";
            //    print_r($query);

            if($this->db->insert('Registration',$this))
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