<?php
    
    class LabelService extends CI_Controller
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
            echo json_encode($query);
        }

        public function delete_label($label_id, $label_name)
        {
            // $data = array("label_id" => $label_id,
            //             "lable_name" => $lable_name);
            
            $query = $this->db->query("DELETE FROM labels WHERE `label_id` = '$label_id'");
            print_r($query);
            
        }

        public function show_labels()
        {
            $q = $this->db->get('labels');
            $data = $q->result_array();
            echo json_encode($data);
        }

        
    }
?>