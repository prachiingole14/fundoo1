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
            
            $query= $this->db->query("INSERT INTO labels(`lable_name`) VALUES ('$lable_name')");
            print_r($query);
        }

        public function delete_label($label_id, $lable_name)
        {
            // $data = array("label_id" => $label_id,
            //             "lable_name" => $lable_name);
            
            $query = $this->db->query("DELETE INTO labels(`label_id`) WHERE 'label_id = $label_id'");
            print_r($query);
            
        }

        
    }
?>