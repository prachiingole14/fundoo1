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
            print $password;
            $confirm_password = $_POST['confirmpassword'];
            print $confirm_password;

           // $user = new model\Entity\Users;
            // $user->setFirstname($firstname);
            // $user->setaddress($address);
            // $user->setcontact($contact);
            // $user->setemail($email);
            // $user->setusername($username);
            // $user->setpassword($password);
            // $user->setconfirmpassword($confirmpassword);

             $abc=$_POST['firstName'];
             print   $abc;

            // $data = array('name' => $this->input->post('name'),
            // 'address' => $this->input->post('address'),
            // 'contact_no' => $this->input->post('contact_no'),
            // 'email_id' => $this->input->post('email_id'),
            // 'user_name' => $this->input->post('user_name'),
            // 'password' => $this->input->post('password'),
            // 'confirm' => $this->input->post('confirmpassword'));

            // $query_res=$this->load->UserService(insert($data));
            // $this->response($query_res); 

       }

        // public function showregister()
        // {
        //     $query=$this->db->query("select * from Registration");
        //     print_r($query->result());
        // }

    //    public function login()
    //    {
    //        $username=$_POST['username'];
    //        $password=$_POST['password'];
           
    //        $query= $this->db->query("INSERT INTO Registration(`username`,`password`) VALUE('$username','$password')");
    //        echo json_encode($query->result());
    //    }

      
    }
?>