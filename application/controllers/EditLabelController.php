<?php
    defined('BASEPATH') or exit('No direct script access allowed');
    include "/var/www/html/fundoonote/application/Service/labelService.php";
    // header('Access-Control-Allow-Origin: *');
    // header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    
    class EditLabelController extends CI_Controller
    {

        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->label = new labelService();
        }

        public function addLabel()
        {
            $label_name=$_GET['label_name'];
            print $label_name;
            $result = $this->label->add_label($label_name);
            return $result;
        }

        public function deleteLabel()
        {
            $label_id=$_POST['label_id'];
            //$lable_name=$_POST['label_name'];
            $result = $this->label->delete_label($label_id, $lable_name);
            return $result;
        }
   
    }
?>