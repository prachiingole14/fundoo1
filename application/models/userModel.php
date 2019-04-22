<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class userModel extends CI_Model
{
    public function write()
    {
        $this->firstname = $_POST['firstName'];
        $this->address = $_POST['address'];
        $this->$contact = $_POST['contact'];
        $this->$email = $_POST['email'];
        $this->$username=$_POST['username'];
        $this->$password = $_POST['password'];
        $this->$confirmpassword = $_POST['confirmpassword'];
        
        $query = $this->db->query("insert into registration(`firstname`,`address`,`contact`,`email`,`username`,`password`,`confirmpassword`) values('firstname','address',contact,`email`,`password`,`confirmpassword`)");
       return $query->result_array();
    }
}