<?php

    defined('BASEPATH') or exit('No direct script access allowed');
    //include "/var/www/html/fundoo1/application/Service/AccountService.php";
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    header("Access-Control-Allow-Headers: X-Requested-With");
    
    class AccountController extends CI_Controller
    {
        
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
           // $this->AccService = new AccountService();
        }


        public function register()
        {
            $firstName = $_POST['firstName'];
            print $firstName;
            $address = $_POST['address'];
            print $address;
            $contact_no = $_POST['contact'];
            print $contact_no;
            $email_id = $_POST['email'];
            print $email_id;
            $password = $_POST['password'];
            $confirm_password = $_POST['confirm_password'];
            
            // $account->setFirstname($firstName);
            // $account->setaddress($address);
            // $account->setcontact($contact_no);
            // $account->setemail($email_id);
            // $account->setpassword($password);
            // $account->setconfirmpassword($confirmpassword);

            $res = $this->AccService->Registration($firstName, $address, $contact_no ,$email_id, $password, $confirm_password);

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

        public function uploadprofile()
        {
            $config = array(    'upload_path' => './upload/',
                                'allowed_type' => 'jpg|jpeg|png|',
                                'max_size' => '100',
                                'max_width' => '100',
                                'max_height' => '100'   );
        
            $this->load->library('upload', $config);
            $this->input->post('profile_picture');
            $data_upload_files = $this->upload->data();
            $images = data_upload_files('../../src/assets/images/');

            $data = array( "user_id" => $_POST['user_id'],
                           "profile_picture" => $_POST['profile_picture']);

            //$uploadProfilePicture = $this->AccService->setProfile($data);
            $uploadProfilePicture = $this->db->insert('register', $data);
            return $uploadProfilePicture;
        }

    }
?>