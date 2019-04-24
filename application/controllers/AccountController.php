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
          // $this->load->models('AccountModel');
           //$this->Service->registration();
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

            $this->load->models('Account');
            $account = new Account;
            $account->setFirstname($firstname);
            $account->setaddress($address);
            $account->setcontact($contact_no);
            $account->setemail($email_id);
            $account->setpassword($password);
            $account->setconfirmpassword($confirmpassword);

            $res = $this->AcccountService->registration($name, $address, $contact_no ,$email, $password, $confirm_password);

            //$query= $this->db->query("INSERT INTO Registration(`name`,`address`,`contact_no`,`email_id`,`password`,`confirm_password`) VALUE('$name','$address','$contact_no','$email_id','$password','$confirm_password')");

            if($query)
                echo "data enter";
                    else 
                        echo "error";
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
           
            // Validate the post data
            if(!empty($email) && !empty($password))
            { 
                // Check if any user exists with the given credentials
                $con['returnType'] = 'single';
                $con['conditions'] = array('email' => $email,
                                            'password' =>$password,
                                            'status' => 1 );

                //$user = $this->user->getRows($con);
                if($con['condition'])
                {
                    // Set the response and exit
                    $this->response([ 'status' => TRUE,
                                      'message' => 'User login successful.',
                                      'data' => $user]);
                }
                else
                {    
                    $this->response("Wrong email or password.", REST_Controller::HTTP_BAD_REQUEST);
                }
            }
            
        }
    }
?>