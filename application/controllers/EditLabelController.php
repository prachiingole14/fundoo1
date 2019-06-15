<?php
    include "/var/www/html/fundoo1/application/Service/LabelService.php";
    defined('BASEPATH') or exit('No direct script access allowed');
    require APPPATH . 'libraries/REST_Controller.php';
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    header("Access-Control-Allow-Headers: X-Requested-With");
    
    class EditLabelController extends CI_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->label = new LabelService();
        }

        public function addLabel()
        {
            $label_name=$_GET['label_name'];
            $note_id=$_GET['note_id'];
            print $label_name;
            print $note_id;
            $result = $this->label->add_label($label_name,$note_id);
            $data=json_encode($result);
            return $data;
        }

        public function deleteLabel()
        {
            $label_id=$_POST['label_id'];
            //$lable_name=$_POST['label_name'];
            $result = $this->label->delete_label($label_id, $lable_name);
            return $result;
        }

        public function displaylabels()
        {
            $data = $this->label->show_labels();
            print_r($data);
            return $data;
        }
   
    }
?>