<?php
    defined('BASEPATH') or exit('No direct script access allowed');
    include "/var/www/html/CodeIgniter-3.1.10/application/Service/AddNoteService.php";
    header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Authorization");


    class NotesController extends CI_Controller
    {

        private $AddNoteService = " ";
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->addnoteservice = new AddNoteService();
        }

        public function addnote()
        {
            $title = $_POST['title'];
            $description = $_POST['description'];
            $color = $_POST['color'];
            $image = $_POST['image'];

            $res = $this->addnoteservice->AddNotes($title, $description, $color ,$image);
            return $res;
        }

        public function demo()
        {
            echo "hiiiiii";
        }
    }    

