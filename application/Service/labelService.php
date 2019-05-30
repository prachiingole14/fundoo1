<?php
    
    class labelService extends CI_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
        }

        public function add_label($lable_name)
        {
            $data = array("lable_name" => $lable_name);
            
            $query= $this->db->query("INSERT INTO label(`lable_name`) VALUES ('$lable_name')");
            print_r($query);
        }
    }
?>