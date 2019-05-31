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
            $lable_name=$_POST['lable_name'];
            $result = $this->label->add_label($lable_name);
            return $result;
        }
   
    }
?>