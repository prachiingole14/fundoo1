<?php
 require(APPPATH.'/libraries/REST_Controller.php');
 require APPPATH . 'libraries/Format.php';
 defined('BASEPATH') or exit('No direct script access allowed');
require(APPATH.'/controllers/UserDataContoller');

class userModel extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->controllers('UserDataController');
    }

    public function insert($data)
    {
        //     'firstname'->$this->input->post('firstname');
        //     $this->firstname = $_POST['firstName'];
        //     $this->address = $_POST['address'];
        //     $this->$contact = $_POST['contact'];
        //     $this->$email = $_POST['email'];
        //     $this->$username=$_POST['username'];
        //     $this->$password = $_POST['password'];
        //     $this->$confirmpassword = $_POST['confirmpassword'];
    
   
        $this->name  = $data['name'];
        $this->address = $data['address'];
        $this->contact_no = $data['contact_no'];
        $this->email_id = $data['email_id'];
        $this->username = $data['username'];
        $this->password = $data['password'];
        $this->confirm_password = $data['confirm_password'];

        // $query = $this->db->query("insert into registration(`firstname`,`address`,`contact_no`,`email`,`username`,`password`,`confirmpassword`) values('firstname','address',contact_no,`email_id`,`password`,`confirm_password`)");
        // return $query->result_array();

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