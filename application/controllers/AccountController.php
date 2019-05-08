<?php
    defined('BASEPATH') or exit('No direct script access allowed');
    include '/var/www/html/CodeIgniter-3.1.10/application/Service/AccountService.php';

    class AccountController extends CI_Controller
    {
        
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->AccModel=new AccountModel();
            $this->AccService = new AccountService();
            $this->AccModel= new AccountModel();
        }


        public function register()
        {
            $firstName = $_POST['firstName'];
            print $name;
            $address = $_POST['address'];
            print $address;
            $contact_no = $_POST['contact'];
            print $contact_no;
            $email_id = $_POST['email'];
            print $email_id;
            $password = $_POST['password'];
            $confirmpassword = $_POST['confirmpassword'];
            
            // $account->setFirstname($firstName);
            // $account->setaddress($address);
            // $account->setcontact($contact_no);
            // $account->setemail($email_id);
            // $account->setpassword($password);
            // $account->setconfirmpassword($confirmpassword);

            $res = $this->AccService->Registration($firstName, $address, $contact_no ,$email_id, $password, $confirmpassword);

           //$query= $this->db->query("INSERT INTO Registration(`name`,`address`,`contact_no`,`email_id`,`password`,`confirm_password`) VALUE('$name','$address','$contact_no','$email_id','$password','$confirm_password')");
       }

    //    public function resetPassword()
    //    {
    //        if($this->showregistered())
    //        {
    //             $email = $_POST['email'];
    //             $password = $_POST['password'];
    //             $newpassword= $_POST['newpassword'];
    //             $res = $this->AccService->ResetPassword($email, $password, $newpassword); 
    //        }
    //    }

        public function showregistered()
        {   $email = $_POST['email'];
            $query=$this->db->query("select email_id,password from Registration where email_id='$email'");
            print_r($query->result());
        }

        public function login()
        {
            $email = $_POST['email'];
            $password = $_POST['password'];
            $res=$this->AccService->getlogin($email,$password);
        }

        // public function getEmailId()
        // {
        //     $token = $_POST['token'];
        //     return $this->AccService->getEmailId($token);
        // }

    }
?>