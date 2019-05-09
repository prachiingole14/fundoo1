<?php
    defined('BASEPATH') or exit('No direct script access allowed');
    include "/var/www/html/CodeIgniter-3.1.10/application/Service/NoteService.php";
 

    class NotesController extends CI_Controller
    {

        private $NoteService = " ";
        public function __construct()
        {
            parent::__construct();
            $this->load->database();
            $this->noteservice = new NoteService();
        }

        public function addnote()
        {
            $title = $_POST['title'];
            $description = $_POST['description'];
            $color = $_POST['color'];
            $image = $_POST['image'];

            $result = $this->noteservice->AddNotes($title, $description, $color ,$image);
            return $result;
        }

        public function editcolor()
        {
            $color = $_POST['color'];
            $id = $_POST['id'];
            $result= $this->noteservice->changeColor($color,$id);
            return $result;
        }
    }    

