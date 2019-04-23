<?php

    require(APPPATH.'/libraries/REST_Controller.php');
    require APPPATH . 'libraries/Format.php';
    defined('BASEPATH') or exit('No direct script access allowed');
    //include('/var/www/html/CodeIgniter-3.1.10/fundoo/src/app/service/register.service.ts');

    class AccountController extends CI_Controller
    {
        
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            // $this->load->model('userModel');
            // $this->load->service('UserService');
        }

        public function register()
        {
            $name = $_POST['firstName'];
            print $name;
            $address = $_POST['address'];
            print $address;
            $contact_no = $_POST['contact'];
            print $contact_no;
            $email_id = $_POST['email'];
            print $email_id;
            $username=$_POST['username'];
            print $username;
            $password = $_POST['password'];
           
            $confirm_password = $_POST['confirmpassword'];
            

            $query= $this->db->query("INSERT INTO Registration(`name`,`address`,`contact_no`,`email_id`,`user_name`,`password`,`confirm_password`) VALUE('$name','$address','$contact_no','$email_id','$username','$password','$confirm_password')");
       }

        // public function showregister()
        // {
        //     $query=$this->db->query("select * from Registration");
        //     print_r($query->result());
        // }

       public function login()
       {
        $email_id = $_POST['email'];
        print $email_id;
           $password=$_POST['password'];
           print $password;
           
           $query= $this->db->query("SELECT 'email_id,password' from Registration");
           if($query)
           {
               if($password==Registration.password)
               echo "success";
               else
               echo "wrong";
           }
           else {
               echo "error";
           }
           
           
       }

      
    }
?>