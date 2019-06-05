<?php
    
    class labelService extends CI_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
        }

        public function add_label($label_name)
        {
            $data = array("label_name" => $label_name);
            $query= $this->db->query("INSERT INTO labels(`label_name`) VALUES ('$label_name')");
            print_r($query);
        }

        public function delete_label($label_id, $label_name)
        {
            // $data = array("label_id" => $label_id,
            //             "lable_name" => $lable_name);
            
            $query = $this->db->query("DELETE INTO labels(`label_id`) WHERE 'label_id = $label_id'");
            print_r($query);
            
        }

        
    }
?>