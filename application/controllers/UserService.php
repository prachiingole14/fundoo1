<?php

    require(APPPATH.'/libraries/REST_Controller.php');
    require APPPATH . 'libraries/Format.php';
    defined('BASEPATH') or exit('No direct script access allowed');
    //include('/var/www/html/CodeIgniter-3.1.10/fundoo/src/app/service/register.service.ts');

    class UserService extends CI_Controller
    {
        
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->load->model('userModel');
        }

        public function registerApi()
        {
            echo "hiii";
            $firstname = $_POST['firstName'];
            $address = $_POST['address'];
            $contact = $_POST['contact'];
            $email = $_POST['email'];
            $username=$_POST['username'];
            $password = $_POST['password'];
            $confirmpassword = $_POST['confirmpassword'];

            $query=$this->db->query("insert into registration(`firstName`,`address`,`contact`,`email`,`username`,`password`,`confirmpassword`)values('firstname','address',contact,'email','username','password','confirmpasssword')");
            // $query=$this->db->query('select * from registration');
            // print_r($query->result());
        }

        // public function user_get()
        // {
        //     $r = $this->user_model->write();
        //     $this->response($r); 
        // }

    }

   
?>